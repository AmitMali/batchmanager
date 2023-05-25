const express = require("express");
const {
  createBatch,
  getBatches,
  getSingleBatch,
  updateBatch,
  deleteBatch,
} = require("../controllers/batchController");
const { isAuthorized } = require("../middlewares/middleware");
const router = express.Router();

router
  .use(isAuthorized)
  .get("/", getBatches)
  .get("/:batchId", getSingleBatch)
  .post("/", createBatch)
  .put("/:batchId", updateBatch)
  .delete("/:batchId", deleteBatch);
module.exports = router;
