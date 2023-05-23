//intial configuration
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const apiVersion = "/api/v1";

//route imports
const homeRoutes = require("./routes/homeRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
//middleware
app.use(cors());
app.use(bodyParser.json());

//using routes
app.use(`${apiVersion}/`, homeRoutes);
app.use(`${apiVersion}/users/`, userRoutes);
app.use(`${apiVersion}/auth/`, authRoutes);

module.exports = app;
