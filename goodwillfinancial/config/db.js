const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const Goodwill = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Succesfully connection to Dream Institutes database");
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({ msg: "Internal Error,Database connection failed !!" });
  }
};

module.exports = Goodwill;
