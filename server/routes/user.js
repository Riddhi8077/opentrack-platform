const express = require("express");
const router = express.Router();

// Get user profile
router.get("/profile", (req, res) => {
    res.send("User profile data");
});

module.exports = router;

