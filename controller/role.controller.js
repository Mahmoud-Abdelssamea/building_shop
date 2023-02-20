const fs = require("fs");
const roleModel = require("../model/rolesModel");
const MyHelper = require("../utils/helper");
const userModel = require("../model/userModel");

class Role {
  //
  //---------------------------------- Create New Role----------------------------//
  //
  static createNewRole = async (req, res) => {
    try {
      const roles = req.body;
      const { employeeId } = req.params;

      const checkUserHasRole = await userModel.findOne({ _id: employeeId });

      console.log(checkUserHasRole);
      if (!checkUserHasRole) throw new Error("this employee not available");

      if (checkUserHasRole.role) {
        throw new Error("this user already has role you can't create new one ");
      }

      //   creat newe role
      const newRole = await roleModel.create({ roles });
      if (!newRole) throw new Error("failed to create new Role");

      //   add role Id to user
      await userModel.updateOne(
        { _id: employeeId },
        { $set: { role: newRole._id, status: true } }
      );
      MyHelper.resHelper(res, 200, true, newRole, "new Role added");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //---------------------------------- Update a single Role----------------------------//
  //
  static updateRole = async (req, res) => {
    try {
      const links = req.body;
      const { employeeId } = req.params;

      const employeeData = await userModel.findOne({ _id: employeeId });

      if (!employeeData) throw new Error("this employee not available");

      if (!employeeData.role)
        throw new Error("this employee doesn't have role");

      const data = links.map((element) => {
        return {
          url: {
            u: element.u,
            method: element.method,
            params: element.params || [],
            query: element.query || [],
          },
        };
      });

      let updatedRole = await roleModel.findByIdAndUpdate(
        { _id: employeeData.role },
        {
          urls: data,
        }
      );

      if (!updatedRole)
        throw new Error("this employee doesn't have role to update");

      updatedRole = await roleModel.findOne({ _id: employeeData.role });

      MyHelper.resHelper(res, 200, true, updatedRole, "role updated");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //---------------------------------- delete single Role----------------------------//
  //
  static deleteRole = async (req, res) => {
    try {
      const { employeeId } = req.params;

      const employeeData = await userModel.findOne({ _id: employeeId });

      if (!employeeData) throw new Error("this employee not available");

      if (!employeeData.role)
        throw new Error("this employee doesn't have role");

      const singleRole = await roleModel.findByIdAndDelete({
        _id: employeeData.role,
      });
      if (!singleRole) throw new Error("this employee doesn't have role");

      await userModel.updateOne(
        { _id: employeeId },
        { role: null, status: false }
      );

      MyHelper.resHelper(res, 200, true, singleRole, "Role deleted");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //---------------------------------- delete all roles----------------------------//
  //
  static deleteAllRoles = async (req, res) => {
    try {
      const allRole = await roleModel.deleteMany({});

      if (allRole.deletedCount == 0)
        throw new Error("there's no roles to delete");
      MyHelper.resHelper(res, 200, true, allRole, "all Roles deleted");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //---------------------------------- Get All Roles----------------------------//
  //
  static getAllRoles = async (req, res) => {
    try {
      const allRoles = await roleModel.find({});
      if (allRoles.length == 0) throw new Error("there is no Roles to show");
      MyHelper.resHelper(res, 200, true, allRoles, "All roles");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //---------------------------------- Get single Role----------------------------//
  //
  static getSingleRole = async (req, res) => {
    try {
      const employeeData = await userModel.findOne({
        _id: req.params.employeeId,
      });
      if (!employeeData) throw new Error("this employee not available");

      const singleRole = await roleModel.findOne({
        _id: employeeData.role,
      });

      if (!singleRole) throw new Error("this employee doesn't have role");

      MyHelper.resHelper(res, 200, true, singleRole, "single role");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  static showAllRoles = async (req, res) => {
    try {
      const readfile = fs.readFileSync("utils/roles.json");
      const roles = JSON.parse(readfile);
      MyHelper.resHelper(res, 200, true, roles, "show list of roles");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };
}

module.exports = Role;
