const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
  userType: {
    type: String,
    required: true,
  },
  urls: [
    {
      url: {
        u: {},
        method: {},
      },
    },
  ],
  userId: mongoose.Schema.Types.ObjectId,
});

const Role = mongoose.model("Role", roleSchema);
module.exports = Role;
