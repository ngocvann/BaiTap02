const express = require("express");
const bodyParser = require("body-parser");
const viewEngine = require("./config/viewEngine");
const initWebRoutes = require("./route/web");
const connectDB = require("./config/configdb");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cấu hình EJS
viewEngine(app);

// Cấu hình route
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 8088;

app.listen(port, () => {
  console.log("Backend Node.js is running on port: " + port);
});
