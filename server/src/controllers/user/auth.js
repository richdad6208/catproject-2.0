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
  res.status(200).json({ success: true, user: req.user });
}

module.exports = {
  createUser,
  loginUser,
};
