const express = require("express");
const {
  createCourse,
  getCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");
const { isAuthorized } = require("../middlewares/middleware");
const router = express.Router();

router
  .use(isAuthorized)
  .get("/", getCourses)
  .get("/:courseId", getSingleCourse)
  .post("/", createCourse)
  .put("/:courseId", updateCourse)
  .delete("/:courseId", deleteCourse);
module.exports = router;
