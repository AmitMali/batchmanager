const express = require("express");
const { createUser } = require("../controllers/userController");
const { hashPassword } = require("../middlewares/middleware");
const router = express.Router();
router.post("/", hashPassword, createUser);
module.exports = router;
