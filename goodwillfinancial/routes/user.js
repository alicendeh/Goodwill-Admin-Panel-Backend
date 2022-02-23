const express = require("express");
const router = express.Router();
const Users = require("../Model/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");
const Auth = require("../middleware/Auth");

//create an users account
router.post("/CreateAccount", async (req, res) => {
  try {
    const { name, email, tel, amount } = req.body;

    let user = await Users.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "Email already taken" });
    }

    user = new Users({
      name,
      email,
      tel,
      amount,
    });

    await user.save();
    res.status(200).json({ user });

    await user.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

//view all users
router.get("/viewAll", async (req, res) => {
  try {
    const users = await Users.find({});
    res.status(200).json({ users });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

//edit user info

module.exports = router;
