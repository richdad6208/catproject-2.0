const User = require("../../db/schemas/User");
const jwt = require("jsonwebtoken");

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

  setUserToken(res, { email, userName });

  res.json({ success: true, user });
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.json({ success: false });
  }

  const token = jwt.sign({ email, userName: user.userName }, "secret");
  res.cookie("token", token);
  res.status(200).json({ success: true, accessToken: token });
}

module.exports = {
  createUser,
  loginUser,
};
