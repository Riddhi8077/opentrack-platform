const express = require("express");
const router = express.Router();
const controller = require("../controllers/programController");

router.post("/", controller.createProgram);
router.get("/", controller.getPrograms);
router.put("/:id", controller.updateProgram);
router.delete("/:id", controller.deleteProgram);

module.exports = router;
