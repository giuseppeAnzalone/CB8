const express = require("express");
const app = express();
const router = require("./routes/root");

app.use(router);

app.listen(5000, () => {
  console.log("Server in ascolto");
});
