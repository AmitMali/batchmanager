const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
//hash password
const encryptPassword = (req, res, next) => {
  if (req.body.password) {
    const saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      req.body.password = hash;
      next();
    });
  }
  next();
};

const isAuthorized = (req, res, next) => {
  const authorizationToken = req.headers.authorization;
  if (authorizationToken) {
    try {
      const user = jwt.verify(authorizationToken, JWT_SECRET);
      console.log(user);
      next();
    } catch (err) {
      res.status(401).json({
        status: "Failed",
        message: "Token Malformed...",
      });
    }
  } else {
    res.status(401).json({
      status: "Failed",
      message: "Authorization Required",
    });
  }
};

module.exports = { encryptPassword, isAuthorized };
