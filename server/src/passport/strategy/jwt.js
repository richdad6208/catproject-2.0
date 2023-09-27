const JwtStrategy = require("passport-jwt").Strategy;
const { secret } = require("../../utils/jwt.js");

const cookieExtractor = (req) => {
  const { token } = req.cookies;
  return token;
};

const opts = {
  secretOrKey: secret,
  jwtFromRequest: cookieExtractor,
};

const jwt = new JwtStrategy(opts, (user, done) => {
  done(null, user);
});

module.exports = jwt;
