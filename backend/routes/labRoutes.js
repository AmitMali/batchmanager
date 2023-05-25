const express = require("express");
const {
  createLab,
  getLabs,
  getSingleLab,
  updateLab,
  deleteLab,
} = require("../controllers/labController");
const { isAuthorized } = require("../middlewares/middleware");
const router = express.Router();

router
  .use(isAuthorized)
  .get("/", getLabs)
  .get("/:labId", getSingleLab)
  .post("/", createLab)
  .put("/:labId", updateLab)
  .delete("/:labId", deleteLab);
module.exports = router;
