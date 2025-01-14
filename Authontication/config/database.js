const mongoose = require("mongoose");

require("dotenv").config();
// const data = process.env.DATABASE_URL;

const connectdb = () =>
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("successfuly connected with DB");
    })
    .catch((error) => {
      console.error(error);
      console.log("eror in connection with DB");
      process.exit(1);
    });

module.exports = connectdb;
