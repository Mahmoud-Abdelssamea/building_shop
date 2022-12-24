const roleModel = require("../model/rolesModel");
const MyHelper = require("../utils/helper");

class Role {
  //
  //---------------------------------- Create New Role----------------------------//
  //
  static createNewRole = async (req, res) => {
    try {
      const { userType, links } = req.body;
      const userId = req.user._id;

      const data = links.map((element) => {
        return {
          url: {
            u: element.u,
            method: element.method,
          },
        };
      });

      const newRole = await roleModel.create({
        userId,
        userType,
        urls: data,
      });

      if (!newRole) throw new Error("failed to create new Role");
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
      const { userType, links } = req.body;
      const data = links.map((element) => {
        return {
          url: {
            u: element.u,
            method: element.method,
          },
        };
      });

      const updatedRole = await roleModel.findByIdAndUpdate(
        { _id: req.params.roleId },
        {
          userType,
          urls: data,
        }
      );

      if (!updatedRole) throw new Error("failed to create new Role");
      MyHelper.resHelper(res, 200, true, newRole, "new Role added");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //---------------------------------- delete single----------------------------//
  //
  static deleteRole = async (req, res) => {
    try {
      const singleRole = await roleModel.findByIdAndDelete({
        _id: req.params.roleId,
      });
      if (!singleRole) throw new Error("this role not available");
      MyHelper.resHelper(res, 200, true, singleRole, "Role deleted");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //---------------------------------- delete single----------------------------//
  //
  static deleteRole = async (req, res) => {
    try {
      const singleRole = await roleModel.findByIdAndDelete({
        _id: req.params.roleId,
      });
      if (!singleRole) throw new Error("this role not available");
      MyHelper.resHelper(res, 200, true, singleRole, "Role deleted");
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
      const singleRole = await roleModel.find({ _id: req.params.roleId });
      if (!singleRole) throw new Error("this role not available");
      MyHelper.resHelper(res, 200, true, singleRole, "single role");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };
}

module.exports = Role;
