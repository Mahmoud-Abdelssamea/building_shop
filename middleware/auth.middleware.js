const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");
const MyHelper = require("../utils/helper");

const auth = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token) throw new Error("there is no token");
    token = token.replace("Bearer ", "");

    let decodedToken;
    jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
      if (err) throw new Error("failed to verify token please login again");
      if (decoded) decodedToken = decoded;
    });

    if (!decodedToken) throw new Error("invalid token");

    // get the data
    const userData = await userModel.findOne({
      _id: decodedToken._id,
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
