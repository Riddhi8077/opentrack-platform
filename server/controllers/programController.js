const Program = require("../models/Program");

exports.createProgram = async (req, res) => {
  const program = await Program.create(req.body);
  res.status(201).json(program);
};

exports.getPrograms = async (req, res) => {
  const programs = await Program.find();
  res.json(programs);
};

exports.updateProgram = async (req, res) => {
  const program = await Program.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(program);
};

exports.deleteProgram = async (req, res) => {
  await Program.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
