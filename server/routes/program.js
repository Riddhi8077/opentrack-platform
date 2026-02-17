const express = require("express");
const router = express.Router();

router.get("/programs", (req, res) => {
    res.send("Get all programs");
});

router.post("/programs", (req, res) => {
    res.send("Add new program");
});

module.exports = router;

