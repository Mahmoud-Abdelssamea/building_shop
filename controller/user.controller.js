const validator = require("validator");
const userModel = require("../model/userModel");
const MyHelper = require("../utils/helper");
const Crypt = require("../utils/passwordCrypt");
const Token = require("../utils/createToken");

class User {
  // create new user
  static addNewUser = async (req, res) => {
    try {
      // get data
      let { fName, lName, email } = req.body;
      const typeOfUser = "employee";
      const thePassword = req.body.password;

      if ((!fName, !lName, !email, !thePassword))
        throw new Error("please fill all required fields");

      // check if user already exists
      const userData = await userModel.findOne({ email });
      if (userData) {
        throw new Error("User already exists");
      }

      // encrypt password
      const hashedPassword = Crypt.encrypt(thePassword);

      // add new user to database
      const data = {
        fName,
        lName,
        email,
        typeOfUser,
        password: hashedPassword,
      };
      const newUser = await userModel.create(data);
      const { password, ...user } = newUser._doc;

      if (!newUser) throw new Error("can not create new user");
      MyHelper.resHelper(res, 201, true, user, "new User added successfully");
    } catch (error) {
      if (error.code == 11000) {
        error["message"] =
          Object.keys(error.keyValue)[0] + " is already exists";
      }
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //----------------------------------delete User----------------------------//
  //
  static deleteUser = async (req, res) => {
    try {
      const deletedUser = await userModel.findByIdAndDelete({
        _id: req.params.id,
      });
      if (!deletedUser) throw new Error("this user not available");
      MyHelper.resHelper(
        res,
        201,
        true,
        deletedUser,
        "User deleted successfully"
      );
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //----------------------------------Update User----------------------------//
  //
  static updateUser = async (req, res) => {
    try {
      let updatedUser = await userModel.findByIdAndUpdate(
        {
          _id: req.params.id,
        },
        { ...req.body }
      );
      if (!updatedUser) throw new Error("this user not available to update");
      updatedUser = await userModel.findOne({ _id: req.params.id });
      MyHelper.resHelper(
        res,
        201,
        true,
        updatedUser,
        "User updated successfully"
      );
    } catch (error) {
      if (error.code == 11000) {
        error["message"] =
          Object.keys(error.keyValue)[0] + " is already exists";
      }
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //----------------------------------Update  User's Status----------------------------//
  //
  static updatedUserStatus = async (req, res) => {
    try {
      let updatedUser = await userModel.findByIdAndUpdate(
        {
          _id: req.params.id,
        },
        { ...this.updateUser, status: req.body.status }
      );
      if (!updatedUser) throw new Error("this user not available to update");
      updatedUser = await userModel.findOne({ _id: req.params.id });

      MyHelper.resHelper(
        res,
        201,
        true,
        updatedUser,
        "User status updated successfully"
      );
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  //
  //----------------------------------Login User----------------------------//
  //
  static login = async (req, res) => {
    try {
      // get the data by email
      const thePassword = req.body.password;
      const email = req.body.email;

      const userData = await userModel.findOne({ email });
      if (!userData) throw new Error("this email not available");

      // check password is correct
      const validatePassword = Crypt.compareHashedPassword(
        userData.password,
        thePassword
      );
      if (!validatePassword) throw new Error("invalid password");

      // create token for User send the data as a response
      const token = Token.newToken({ _id: userData._id });

      // remove password from data sent to user
      const { password, ...user } = userData._doc;

      MyHelper.resHelper(
        res,
        200,
        true,
        { user, token },
        "user loggedin successfully"
      );
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };

  // Delete a user by their email address
  static async getUser(req, res) {
    try {
      // get the data by email
      const { email } = req.body;
      // check if this user is already Available

      const userData = await userModel.findOne({ email });

      if (!userData) throw new Error("this email not available");

      const { _id, ...others } = userData._doc;

      MyHelper.resHelper(res, 200, true, _id, "Got Employee Id Successfully");
    } catch (error) {
      console.log(error.message);
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  }
  // Get all Email addresses
  static async getAllEmails(req, res) {
    try {
      const userData = await userModel.find();
      if (!userData) throw new Error("there is no Employee");

      // const [{ emails, ...others }] = userData;
      // console.log({ userData }, { emails });

      const emails = userData.map((user) => {
        return user.email;
      });
      MyHelper.resHelper(
        res,
        200,
        true,
        emails,
        "Got Employee Id Successfully"
      );
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  }

  // Get Employee Details by Id
  static async getEmployee(req, res) {
    try {
      const { employeeId } = req.params;

      if (!validator.isMongoId(employeeId))
        throw new Error("Invalid employee id");

      let userData = await userModel.findById({ _id: employeeId });

      const { password, ...user } = userData._doc;

      MyHelper.resHelper(res, 200, true, user, "Got Employee");
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  }
}

module.exports = User;
