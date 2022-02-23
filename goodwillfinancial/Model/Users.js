const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: ["true", "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  tel: {
    type: Number,
    required: ["true", "tel is required"],
  },
  amount: {
    type: Number,
    required: ["true", "amount is required"],
  },

  date: {
    type: String,
    default: Date.now(),
  },
});

module.exports = mongoose.model("users", UserSchema);
