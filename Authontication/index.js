const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const connectDB = require("./config/database");
connectDB();

const user = require("./routes/user");
app.use("/api/v1", user);

app.listen(PORT, () => {
  console.log(`server is running successfuly at ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("this is homepage baby");
});
