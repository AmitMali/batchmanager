const user = require("../models/userSchema");

const createUserDB = async (req, res) => {
  try {
    console.log(req.body);
    await user.create(req.body);
    console.log(user);
    res.status(201).json({
      message: "User Created Successfully",
      user,
    });
  } catch (err) {
    res.status(400).json({
      message: "Unable to create user",
      err,
    });
  }
};

module.exports = { createUserDB };
