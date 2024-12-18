const express = require("express");
const cors = require("cors");
const fs = require("fs");
const router = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
  console.log(`Directory ${uploadDir} created`);
}

app.use(cors({ origin: "*", methods: ["GET", "POST"] }));

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
