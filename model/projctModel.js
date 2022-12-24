const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  projectName: { type: String, required: true },
  projectLocation: { type: String, required: true },
});

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
