const bcrypt = require("bcrypt");

const hashPassword = (req, res, next) => {
  const saltRounds = 10;
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    req.body.password = hash;
    next();
  });
};

module.exports = { hashPassword };
