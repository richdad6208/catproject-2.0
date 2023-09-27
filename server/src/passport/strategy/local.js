const LocalStrategy = require("passport-local");
const User = require("../../db/schemas/User");

const config = {
  usernameField: "email",
  passwordField: "password",
};

const local = new LocalStrategy(config, async (email, password, done) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw Error("유저가 없습니다");
  }
  if (password !== user.password) {
    throw Error("비밀번호가 틀립니다");
  }
  done(null, {
    shortId: user.shortId,
    email: user.email,
    userName: user.userName,
  });
});

module.exports = local;
