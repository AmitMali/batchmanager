const user = require("../models/userSchema");
const course = require("../models/courseSchema");
const batch = require("../models/batchSchema");
// create user
const createUserDB = async (data) => {
  try {
    const createdUser = await user.create(data);
    return createdUser;
  } catch (err) {
    return err;
  }
};
//getUser by email ID
const getAllUsers = async () => {
  try {
    const allUsers = await user.find();
    return allUsers;
  } catch (err) {
    return err;
  }
};
const getUserByEmail = async (email) => {
  try {
    const loggedInUser = await user.find({ email: email });
    return loggedInUser;
  } catch (err) {
    return err;
  }
};
//getUser by ID
const getUserById = async (userId) => {
  try {
    const loggedInUser = await user.findById(userId);
    return loggedInUser;
  } catch (err) {
    return err;
  }
};

//update user with respect to id
const updateUserById = async (userId, dataToUpdate) => {
  try {
    const updatedUser = await user.findByIdAndUpdate(userId, dataToUpdate, {
      new: true,
    });
    return updatedUser;
  } catch (err) {
    return err;
  }
};
// delete user by id
const deleteUserByID = async (userId) => {
  try {
    const deletedUser = await user.findByIdAndDelete(userId);
    return deletedUser;
  } catch (err) {
    return err;
  }
};

//course DB Operation

//show all course

const createCourseDB = async (data) => {
  try {
    const createCourse = await course.create(data);
    return createCourse;
  } catch (err) {
    return err;
  }
};

// get all courses
const getAllCourses = async () => {
  try {
    const allCourses = await course.find();
    return allCourses;
  } catch (err) {
    return err;
  }
};

//getcourse by ID
const getCourseById = async (courseId) => {
  try {
    const courseFound = await course.findById(courseId);
    return courseFound;
  } catch (err) {
    return err;
  }
};
//getcourse by Category
// const getCourseByCategory = async (courseCategory) => {
//   try {
//     const course = await course.find();
//     return course;
//   } catch (err) {
//     return err;
//   }
// };

//update course with respect to id
const updateCourseById = async (courseId, dataToUpdate) => {
  try {
    const updatedcourse = await course.findByIdAndUpdate(
      courseId,
      dataToUpdate,
      {
        new: true,
      }
    );
    return updatedcourse;
  } catch (err) {
    return err;
  }
};
// delete course by id
const deleteCourseByID = async (courseId) => {
  try {
    const deletedcourse = await course.findByIdAndDelete(courseId);
    return deletedcourse;
  } catch (err) {
    return err;
  }
};

// batch DB operations
const createBatchDB = async (data) => {
  try {
    const createBatch = await batch.create(data);
    return createBatch;
  } catch (err) {
    return err;
  }
};

const getAllBatches = async () => {
  try {
    const allBatches = await batch.find();
    return allBatches;
  } catch (err) {
    return err;
  }
};

//get batche by ID
const getBatchById = async (batchId) => {
  try {
    const batchFound = await batch.findById(batchId);
    return batchFound;
  } catch (err) {
    return err;
  }
};

//update Batch with respect to id
const updateBatchById = async (batchId, dataToUpdate) => {
  try {
    const updatedBatch = await batch.findByIdAndUpdate(batchId, dataToUpdate, {
      new: true,
    });
    return updatedBatch;
  } catch (err) {
    return err;
  }
};
// delete Batch by id
const deleteBatchByID = async (batchId) => {
  try {
    const deletedBatch = await batch.findByIdAndDelete(batchId);
    return deletedBatch;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createUserDB,
  getUserByEmail,
  getUserById,
  getAllUsers,
  updateUserById,
  deleteUserByID,
  createCourseDB,
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseByID,
  createBatchDB,
  getAllBatches,
  getBatchById,
  updateBatchById,
  deleteBatchByID,
};
