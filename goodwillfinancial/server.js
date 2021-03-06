const express = require("express");
const database = require("./config/db");
const cors = require("cors");

database();

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/users", require("./routes/user"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server Succesfully Started on Port ${PORT}`);
});
