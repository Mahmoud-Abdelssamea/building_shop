const rolesModel = require("../model/rolesModel");
const MyHelper = require("../utils/helper");

const permission = async (req, res, next) => {
  try {
    if (req.user.typeOfUser == "super admin") {
      return next();
    }

    const params = req.params;
    const query = req.query;
    const userData = req.user;
    const method = req.method.toLowerCase();

    // check that user has Role
    const role = await rolesModel.findOne({ _id: userData.role });
    if (!role) throw new Error("User doesn't Have Role to access to.");

    // get all queries and put in array
    queryList = [];
    for (const key in query) {
      queryList.push(key);
    }

    // get URL and remove query from it
    let url = req.originalUrl.split("/");
    url.forEach((element, i) => {
      if (element.startsWith("?")) {
        url.splice(i, 1);
      }
    });

    // replace params in URL by its name and
    let finalUrl = url;
    for (const key in params) {
      url.forEach((element, i) => {
        if (element == params[key]) {
          finalUrl[i] = key;
        } else {
          finalUrl[i] = element;
        }
      });
    }
    finalUrl = finalUrl.join("/");

    // check that this role available in user Role
    const accessableUrl = role.urls.filter((r) => {
      return (
        r.url.method == method &&
        r.url.u == finalUrl &&
        JSON.stringify(r.url.query) == JSON.stringify(queryList)
      );
    });
    if (accessableUrl.length == 0)
      throw new Error("you can't access to this url");
    next();
  } catch (error) {
    MyHelper.resHelper(res, 500, false, error, error.message);
  }
};

module.exports = permission;
