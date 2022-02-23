const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: "true",
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  tel: {
    type: Number,
    required: "true",
  },
  amount: {
    type: Number,
    required: "true",
  },

  date: {
    type: String,
    default: Date.now(),
  },
});

module.exports = mongoose.model("users", UserSchema);
