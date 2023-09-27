const User = require("../../db/schemas/User");

async function createUser(req, res) {
  const { email, password, userName } = req.body;
  let checkEmail = await User.findOne({ email });

  if (checkEmail) {
    return res.json({
      success: false,
      errorMessage: "해당 이메일이 존재합니다",
    });
  }

  const user = await User.create({
    email,
    password,
    userName,
  });
  console.log(user);

  res.json({ success: true, user });
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  const checkEmail = await User.findOne({ email });
  if (!checkEmail) {
    return res.json({
      success: false,
      errorMessage: "이메일 또는 비밀번호가 틀립니다",
    });
  }
  const checkPassword = await User.findOne({ password });
  if (!checkPassword) {
    return res.json({
      success: false,
      errorMessage: "이메일 또는 비밀번호가 틀립니다",
    });
  }

  res.status(201).json({ success: true });
}

module.exports = {
  createUser,
  loginUser,
};
