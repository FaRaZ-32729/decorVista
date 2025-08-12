const express = require("express");
const { updateConsultation, deleteConsultation, getConsultationsByOwner, getConsultationsByDesigner, createConsultation } = require("../controllers/consultationController");
const router = express.Router();

router.post("/", createConsultation);
router.get("/owner/:id", getConsultationsByOwner);
router.get("/designer/:id", getConsultationsByDesigner);
router.put("/:id", updateConsultation);
router.delete("/:id", deleteConsultation);

module.exports = router