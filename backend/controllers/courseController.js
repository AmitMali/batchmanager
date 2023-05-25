const {
  createCourseDB,
  getAllCourses,
  getCourseById,
  deleteCourseByID,
  updateCourseById,
} = require("../db/db");

const getCourses = async (req, res) => {
  const courses = await getAllCourses();
  res.status(200).json({ courses });
};

const getSingleCourse = async (req, res) => {
  const courseId = req.params.courseId;
  try {
    const course = await getCourseById(courseId);
    if (!course) {
      return res.status(404).json({ error: "course not found" });
    }
    res.status(200).json({ course });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const createCourse = (req, res) => {
  try {
    createCourseDB(req.body);
    return res.status(201).json({ message: "Course created" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error", err });
  }
};

const updateCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const updatedCourse = await updateCourseById(courseId, req.body);
    if (!updatedCourse) {
      return res.status(404).json({ error: "course not found" });
    } else {
      return res.status(200).json({ message: "course updated " });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const deletedCourse = await deleteCourseByID(courseId);
    if (!deletedCourse) {
      return res.status(404).json({ error: "course not found" });
    } else {
      return res.status(200).json({ message: "course deleted " });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};
