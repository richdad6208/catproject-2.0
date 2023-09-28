const User = require("../db/schemas/User");
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const { token } = req.cookies;
  console.log(req.cookies);
  jwt.verify(token, "secret", async (err, decoded) => {
    if (err) {
      res.status(400).json({ errorMessage: err });
    } else {
      const { email } = decoded;
      const user = await User.findeOne({ email });
      console.log(user);
      next();
      return;
    }
    return;
  });
};

module.exports = authenticate;
