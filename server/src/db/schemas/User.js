const mongoose = require("mongoose");
const { Schema } = mongoose;
const { nanoid } = require("../../utils");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    userName: {
      type: String,
      require: true,
    },
    shortId: {
      type: String,
      default: () => nanoid(),
    },
  },
  { collection: "User" }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
