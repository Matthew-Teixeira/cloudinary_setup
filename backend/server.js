const dotenv = require("dotenv").config();
const express = require("express");
const db = require("./db/connection");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

db();
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use(require("./routes"));

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
  });