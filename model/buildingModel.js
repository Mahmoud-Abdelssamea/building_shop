const mongoose = require("mongoose");

const BuildingSchema = mongoose.Schema({
  buildingNum: { type: String, required: true },
  NoFloors: { type: Number, required: true },
});

const Building = mongoose.model("building", BuildingSchema);
module.exports = Building;
