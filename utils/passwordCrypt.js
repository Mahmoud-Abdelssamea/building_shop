const bcrypt = require("bcrypt");
class Crypt {
  static encrypt = (password) => {
    const salt = bcrypt.genSaltSync(Number(process.env.SALTROUND));
    return bcrypt.hashSync(password, salt);
  };

  static compareHashedPassword = (hashedPassword, password) => {
    return bcrypt.compareSync(password, hashedPassword);
  };
}

module.exports = Crypt;
