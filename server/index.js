const express = require("express");
const path = require("path");
const cors = require("cors");

const HOST = "localhost";
const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/public")));

app.use("/hello", (req, res) => res.status(200).json("Wingardium, leviosa!"));
app.listen(PORT, HOST, () =>
  console.log(`Server listening on http://${HOST}:${PORT}`)
);
