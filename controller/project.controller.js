const validator = require("validator");
const projectModel = require("../model/projctModel");
const MyHelper = require("../utils/helper");

class Project {
  //
  //---------------------------------- Create New Project----------------------------//
  //
  static createNewProject = async (req, res) => {
    try {
      // get data from body
      const { projectName, projectLocation } = req.body;

      // check data is valid
      if (!projectLocation || !projectName)
        throw new Error(
          "please fill all required data prject name and project location"
        );

      // save data to db
      const newProject = await projectModel.create(req.body);

      if (!newProject) throw new Error("can't create this new porjct");

      MyHelper.resHelper(res, 200, true, newProject, "new project added");
    } catch (error) {
      if (error.code == 11000)
        error["message"] = Object.keys(error.keyValue)[0] + " already exists.";
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //---------------------------------- update Project----------------------------//
  //
  static updateProject = async (req, res) => {
    try {
      const { projectId } = req.params;

      if (!validator.isMongoId(projectId))
        throw new Error("projectId not correct");

      let updatedProject = await projectModel.findByIdAndUpdate(
        { _id: projectId },
        req.body
      );

      if (!updatedProject)
        throw new Error("this project is not available to update");

      updatedProject = await projectModel.findOne({ _id: projectId });

      MyHelper.resHelper(res, 200, true, updatedProject, "project updated");
    } catch (error) {
      if (error.code == 11000) {
        error["message"] =
          Object.keys(error.keyValue)[0] + " is already exists";
      }
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //------------------------------delete Porject---------------------------------//
  //

  static deleteProject = async (req, res) => {
    try {
      const { projectId } = req.params;
      console.log(projectId);
      if (!validator.isMongoId(projectId))
        throw new Error("projectId not correct");

      const deletedProject = await projectModel.findByIdAndDelete({
        _id: projectId,
      });

      if (!deletedProject)
        throw new Error("this project is not available to delete");

      MyHelper.resHelper(res, 200, true, deletedProject, "project deleted");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //------------------------------get All Porjects---------------------------------//
  //

  static getAllProjects = async (req, res) => {
    try {
      const allPorjects = await projectModel.find({});

      if (!allPorjects) throw new Error("no projects to collect");

      MyHelper.resHelper(res, 200, true, allPorjects, "all projects");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //------------------------------get single Porject---------------------------------//
  //
  static getSingleProject = async (req, res) => {
    try {
      const { projectId } = req.params;

      if (!validator.isMongoId(projectId))
        throw new Error("projectId not correct");

      const singlePorject = await projectModel.findOne({ _id: projectId });

      if (!singlePorject) throw new Error("this project is not available");

      MyHelper.resHelper(res, 200, true, singlePorject, "single project");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };
}

module.exports = Project;
