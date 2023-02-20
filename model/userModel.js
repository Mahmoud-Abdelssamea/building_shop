const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
    fName: {
      type: String,
      trim: true,
      lowercase: true,
      minLength: 3,
      maxLength: 20,
      required: true,
    },
    lName: {
      type: String,
      trim: true,
      lowercase: true,
      minLength: 3,
      maxLength: 20,
      required: true,
    },
    typeOfUser: {
      type: String,
      required: true,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("invalid email format");
        }
      },
    },
    status: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      trim: true,
      minLength: 5,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
