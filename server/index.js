const express = require("express");
const path = require("path");
const cors = require("cors");
const router = require("./routers");

const { host, port } = require("./config/config");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/public")));
app.use("/api", router);

// a simple response to ensure server is alive and responsive
app.use("/hello", (req, res) => res.status(200).json("Wingardium, leviosa!"));

app.listen(port, host, () =>
  console.log(`Server listening on http://${host}:${port}`)
);
