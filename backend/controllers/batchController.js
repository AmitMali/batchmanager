const {
  createBatchDB,
  getAllBatches,
  getBatchById,
  updateBatchById,
  deleteBatchByID,
} = require("../db/db");

const getBatches = async (req, res) => {
  const batches = await getAllBatches();
  res.status(200).json({ batches });
};

const getSingleBatch = async (req, res) => {
  const batchId = req.params.batchId;
  try {
    const batch = await getBatchById(batchId);
    if (!batch) {
      return res.status(404).json({ error: "batch not found" });
    }
    res.status(200).json({ batch });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const createBatch = (req, res) => {
  try {
    createBatchDB(req.body);
    return res.status(201).json({ message: "Batch created" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error", err });
  }
};

const updateBatch = async (req, res) => {
  try {
    const batchId = req.params.batchId;
    const updatedBatch = await updateBatchById(batchId, req.body);
    if (!updatedBatch) {
      return res.status(404).json({ error: "batch not found" });
    } else {
      return res.status(200).json({ message: "batch updated " });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteBatch = async (req, res) => {
  try {
    const batchId = req.params.batchId;
    const deletedBatch = await deleteBatchByID(batchId);
    if (!deletedBatch) {
      return res.status(404).json({ error: "Batch not found" });
    } else {
      return res.status(200).json({ message: "Batch deleted " });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createBatch,
  getBatches,
  getSingleBatch,
  updateBatch,
  deleteBatch,
};
