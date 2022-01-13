const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.header("Access-control-allow-origin", "http://localhost:3000");
  res.send(data);
})
