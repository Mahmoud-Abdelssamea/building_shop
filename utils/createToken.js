const jwt = require("jsonwebtoken");

class Token {
  static newToken = (data) => {
    return jwt.sign(data, process.env.SECRETKEY, {
      expiresIn: "3d",
    });
  };

  static checkToken = (token) => {
    return jwt.verify(token, process.env.SECRETKEY);
  };
}

module.exports = Token;
