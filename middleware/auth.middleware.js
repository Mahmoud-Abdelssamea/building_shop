const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");
const MyHelper = require("../utils/helper");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) throw new Error("there is no token");
    token.replace("Bearer ", "");
    const decodedToken = jwt.verify(token, process.env.SECRETKEY);

    if (!decodedToken) throw new Error("invalid token");

    // get the data
    const userData = await userModel.findOne({
      _id: decodedToken._id,
      // "tokens.token": token,
    });
    if (!userData) throw new Error("user not available");

    req.user = userData;
    req.token = token;
    next();
  } catch (error) {
    MyHelper.resHelper(res, 500, false, error, error.message);
  }
};

module.exports = auth;
