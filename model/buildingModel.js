const mongoose = require("mongoose");

const BuildingSchema = mongoose.Schema(
  {
    buildingNum: {
      type: String,
      required: [true, "please add the building number"],
    },
    images: { type: [String], default: [] },
    noFloors: { type: Number, required: [true, "please add number of floors"] },
    projectId: { type: String, required: true },
    units: [
      {
        unitName: { type: String, default: "a" },
        floorNo: { type: Number },
        image: { type: String, default: "" },
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
        image: { type: String, default: "" },
        floorNo: { type: Number },
        status: {
          type: String,
          default: "free",
          enum: ["sold", "free"],
        },
      },
      {
        unitName: { type: String, default: "c" },
        price: { type: Number },
        image: { type: String, default: "" },
        floorNo: { type: Number },
        status: {
          type: String,
          default: "free",
          enum: ["sold", "free"],
        },
      },
      {
        unitName: { type: String, default: "d" },
        price: { type: Number },
        image: { type: String, default: "" },
        floorNo: { type: Number },
        status: {
          type: String,
          default: "free",
          enum: ["sold", "free"],
        },
      },
    ],
  },
  { timestamps: true }
);

const Building = mongoose.model("building", BuildingSchema);
module.exports = Building;
