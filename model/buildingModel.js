const mongoose = require("mongoose");

const BuildingSchema = mongoose.Schema(
  {
    buildingNum: {
      type: String,
      required: [true, "please add the building number"],
    },
    noFloors: { type: Number, required: [true, "please add number of floors"] },
    projectId: { type: String, required: true },
    units: [
      {
        unitName: { type: String, default: "a" },
        floorNo: { type: Number },
        price: { type: Number, default: 1000 },
        unitAddress: { type: String, required: true },
        payment: { type: String, default: "" },
        status: {
          type: String,
          default: "free",
          enum: ["sold", "free"],
        },
      },
      {
        unitName: { type: String, default: "b" },
        price: { type: Number },
        floorNo: { type: Number },
        status: {
          type: String,
          default: "available",
          enum: ["available", "show"],
        },
      },
      {
        unitName: { type: String, default: "c" },
        price: { type: Number },
        floorNo: { type: Number },
        status: {
          type: String,
          default: "available",
          enum: ["available", "show"],
        },
      },
      {
        unitName: { type: String, default: "d" },
        price: { type: Number },
        floorNo: { type: Number },
        status: {
          type: String,
          default: "available",
          enum: ["available", "bought"],
        },
      },
    ],
  },
  { timestamps: true }
);

const Building = mongoose.model("building", BuildingSchema);
module.exports = Building;
