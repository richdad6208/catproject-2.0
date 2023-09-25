const express = require("express");
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Server On 🚀 In Port: ${port}`);
});

module.exports = app;
