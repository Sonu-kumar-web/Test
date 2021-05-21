const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error on running server", err);
  }
  console.log("Server is Running on port: ", port);
});
