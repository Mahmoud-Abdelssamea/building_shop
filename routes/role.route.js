const express = require("express");
const router = express.Router();

const Role = require("../controller/role.controller");
const auth = require("../middleware/auth.middleware");
const permission = require("../middleware/permission.middleware");

// create new user
router.post("/add/:employeeId", auth, permission, Role.createNewRole);
router.get("/all", auth, permission, Role.getAllRoles);
router.get("/single/:employeeId/", auth, permission, Role.getSingleRole);
router.put("/update/:employeeId", auth, permission, Role.updateRole);
router.delete("/delete/:employeeId", auth, permission, Role.deleteRole);
// router.delete("/delete", auth, permission, Role.deleteAllRoles);

// get all roles from role.json file
router.get("/showroles", Role.showAllRoles);

module.exports = router;
