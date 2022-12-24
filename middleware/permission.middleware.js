const rolesModel = require("../model/rolesModel");
const MyHelper = require("../utils/helper");

const permission = async (req, res, next) => {
  try {
    const url = req.originalUrl;
    const method = req.method.toLowerCase();
    const userData = req.user;
    const role = await rolesModel.findOne({ userId: userData._id });

    console.log({ url, method });
    if (!role) throw new Error("you can't access to this url");

    // console.log({ url, method });
    const accessableUrl = role.urls.filter((r) => {
      return r.url.method == method && r.url.u == url;
    });

    if (accessableUrl.length == 0)
      throw new Error("you can't access to this url");
    next();
  } catch (error) {
    MyHelper.resHelper(res, 500, false, error, error.message);
  }
};

module.exports = permission;
