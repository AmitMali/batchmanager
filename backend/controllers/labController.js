const {
  createLabDB,
  getAllLabs,
  getLabById,
  updateLabById,
  deleteLabByID,
} = require("../db/db");

const getLabs = async (req, res) => {
  const labs = await getAllLabs();
  res.status(200).json({ labs });
};

const getSingleLab = async (req, res) => {
  const labId = req.params.labId;
  try {
    const Lab = await getLabById(labId);
    if (!Lab) {
      return res.status(404).json({ error: "Lab not found" });
    }
    res.status(200).json({ Lab });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const createLab = (req, res) => {
  try {
    createLabDB(req.body);
    return res.status(201).json({ message: "Lab created" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error", err });
  }
};

const updateLab = async (req, res) => {
  try {
    const labId = req.params.labId;
    const updatedLab = await updateLabById(labId, req.body);
    if (!updatedLab) {
      return res.status(404).json({ error: "Lab not found" });
    } else {
      return res.status(200).json({ message: "Lab updated " });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteLab = async (req, res) => {
  try {
    const labId = req.params.labId;
    const deletedLab = await deleteLabByID(labId);
    if (!deletedLab) {
      return res.status(404).json({ error: "Lab not found" });
    } else {
      return res.status(200).json({ message: "Lab deleted " });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createLab,
  getLabs,
  getSingleLab,
  updateLab,
  deleteLab,
};
