const mongoose = require("mongoose");

require("dotenv").config();
const dbconnect = () =>mongoose.connect(process.env.DATA_Url)
    .then(() => {
      console.log("sucessfull connected");
    })
    .catch((err) => {
      console.log("issue in connection");
      console.error(err.message);
      process.exit(1);
    });
module.exports = dbconnect;
