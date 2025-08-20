const express = require("express");
const app = express();


const logger = require("./middleware/logger");


app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello Middleware!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
