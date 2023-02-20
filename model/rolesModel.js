const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
  roles: [
    {
      name: String,
      clientUrl: String,
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
