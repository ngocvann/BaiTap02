const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("✅ Server is running successfully!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server started at: http://localhost:${PORT}`);
});
