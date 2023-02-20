const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema(
  {
    projectName: {
      type: String,
      unique: [true, "project name should be unique"],
      required: [true, "please add project name"],
      trim: true,
      lowercase: true,
    },
    projectLocation: {
      type: String,
      required: [true, "please add project location required"],
      trim: true,
    },
    images: { type: [String] },
    buildingsList: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
