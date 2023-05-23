const { createUserDB } = require("../db/db");

const getAllUsers = (req, res) => {};
const createUser = (req, res) => {
  createUserDB(req, res);
};
const updateUser = (req, res) => {};
const deleteUser = (req, res) => {};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
