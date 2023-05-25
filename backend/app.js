//intial configuration
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const apiVersion = "/api/v1";

//route imports
const homeRoutes = require("./routes/homeRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const batchRoutes = require("./routes/batchRoutes");
const labRoutes = require("./routes/labRoutes");
//middleware
app.use(cors());
app.use(bodyParser.json());

//using routes
app.use(`${apiVersion}/`, homeRoutes);
app.use(`${apiVersion}/auth/`, authRoutes);
app.use(`${apiVersion}/users/`, userRoutes);
app.use(`${apiVersion}/courses/`, courseRoutes);
app.use(`${apiVersion}/batches/`, batchRoutes);
app.use(`${apiVersion}/labs/`, labRoutes);

module.exports = app;
