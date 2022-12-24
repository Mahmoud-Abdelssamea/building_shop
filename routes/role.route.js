const express = require("express");
const router = express.Router();

const Role = require("../controller/role.controller");
const auth = require("../middleware/auth.middleware");
const permission = require("../middleware/permission.middleware");

// create new user
router.post("/add", auth, permission, Role.createNewRole);
router.get("/all", auth, permission, Role.getAllRoles);
router.get("/single/:roleId", auth, permission, Role.getSingleRole);
router.put("/update/:roleId", auth, Role.updateRole);
router.delete("/delete/:roleId", auth, Role.deleteRole);

module.exports = router;
