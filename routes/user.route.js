const express = require("express");
const router = express.Router();

const User = require("../controller/user.controller");
const auth = require("../middleware/auth.middleware");
const permission = require("../middleware/permission.middleware");

// create new user
router.post("/add", User.addNewUser);
router.delete("/delete/:id", User.deleteUser);
router.patch("/update/:id", auth, permission, User.updateUser);
router.patch("/update/status/:id", auth, permission, User.updatedUserStatus);
router.post("/login", User.login);

module.exports = router;
