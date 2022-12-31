const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
  urls: [
    {
      url: {
        u: {},
        method: {},
        params: {},
        query: {},
      },
    },
  ],
});

const Role = mongoose.model("Role", roleSchema);
module.exports = Role;
