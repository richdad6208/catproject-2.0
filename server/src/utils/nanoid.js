const { customAlphabet } = require("nanoid");

const nanoid = customAlphabet("1234567890abcdef", 10);

module.exports = nanoid;
