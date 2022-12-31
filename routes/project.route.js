const express = require("express");
const router = express.Router();

const Project = require("../controller/project.controller");
const auth = require("../middleware/auth.middleware");
const permission = require("../middleware/permission.middleware");

// create new user
router.post("/add", auth, permission, Project.createNewProject);
router.get("/all", auth, permission, Project.getAllProjects);
router.get("/single/:projectId", auth, permission, Project.getSingleProject);
router.put("/update/:projectId", auth, permission, Project.updateProject);
router.delete("/delete/:projectId", auth, permission, Project.deleteProject);

module.exports = router;
