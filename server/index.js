const express = require("express");
const app = express();

require("./models/User");
require("./models/Program");
require("./models/Roadmap");

app.use(express.json());

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const programRoutes = require("./routes/program");

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api", programRoutes);
app.use("/api/programs", require("./routes/programRoutes"));

app.get("/", (req, res) => {
    res.send("OpenTrack API Running");
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/opentrack")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));
