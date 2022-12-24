const userModel = require("../model/userModel");
const MyHelper = require("../utils/helper");
const Crypt = require("../utils/passwordCrypt");
const Token = require("../utils/createToken");

class User {
  // create new user
  static addNewUser = async (req, res) => {
    try {
      // encrypt password
      const { password } = req.body;
      const hashedPassword = Crypt.encrypt(password);

      // add new user to database
      const data = { ...req.body, password: hashedPassword };
      const newUser = await userModel.create(data);
      if (!newUser) throw new Error("can not create new user");
      MyHelper.resHelper(
        res,
        201,
        true,
        newUser,
        "mew User added successfully"
      );
    } catch (error) {
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
      const { email, password } = req.body;
      const userData = await userModel.findOne({ email });
      if (!userData) throw new Error("invalid email");

      // check password is correct
      const validatePassword = Crypt.compareHashedPassword(
        userData.password,
        password
      );
      if (!validatePassword) throw new Error("invalid password");

      // create token for User send the data as a response
      const token = Token.newToken({ _id: userData._id });
      userData.tokens = userData.tokens.concat({ token });

      MyHelper.resHelper(
        res,
        200,
        true,
        { user: userData, token },
        "user added successfully"
      );
    } catch (error) {
      MyHelper.resHelper(res, 500, false, error, error.message);
    }
  };
}

module.exports = User;
