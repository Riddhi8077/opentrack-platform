const User = require("../models/User");

// Register
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = new User({ name, email, password });
        await user.save();

        res.json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ message: "Registration failed" });
    }
};

// Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.json({ message: "Login successful" });
    } catch (err) {
        res.status(500).json({ message: "Login failed" });
    }
};
