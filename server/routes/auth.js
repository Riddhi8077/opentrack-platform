const express = require("express");
const router = express.Router();

// Register user
router.post("/register", (req, res) => {
    res.send("User registered");
});

// Login user
router.post("/login", (req, res) => {
    res.send("User logged in");
});

module.exports = router;

