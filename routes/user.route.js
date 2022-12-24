const express = require("express");
const router = express.Router();

const User = require("../controller/user.controller");

// create new user
router.post("/add", User.addNewUser);
router.delete("/delete/:id", User.deleteUser);
router.patch("/update/:id", User.updateUser);
router.patch("/update/status/:id", User.updatedUserStatus);
router.post("/login", User.login);

module.exports = router;
