const validate = require("validator");
const rolesModel = require("../model/rolesModel");
const MyHelper = require("../utils/helper");

const permission = async (req, res, next) => {
  try {
    if (req.user.typeOfUser == "super admin") {
      return next();
    }

    const params = req.params;

    let url = req.originalUrl;
    const oringalUrl = url.split("/");

    let finalUrl = oringalUrl;

    for (const key in params) {
      oringalUrl.forEach((element, i) => {
        if (element == params[key]) {
          finalUrl[i] = key;
          //   finalUrl.push(key);
        } else {
          finalUrl[i] = element;
        }
        // return oringalUrl;
      });
    }
    finalUrl = finalUrl.join("/");

    const method = req.method.toLowerCase();
    const userData = req.user;
    const role = await rolesModel.findOne({ _id: userData.role });

    if (!role) throw new Error("you can't access to this url");

    const accessableUrl = role.urls.filter((r) => {
      console.log(r.url.u);
      return r.url.method == method && r.url.u == finalUrl;
    });
    console.log(userData);
    if (accessableUrl.length == 0)
      throw new Error("you can't access to this url");
    next();
  } catch (error) {
    MyHelper.resHelper(res, 500, false, error, error.message);
  }
};

module.exports = permission;
