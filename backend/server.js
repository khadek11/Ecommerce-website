const express = require("express");
const connectDB = require('./config/dbConnect')
const app = express();
const dotenv = require("dotenv").config();
const PORT = 4000;


app.use("/", (req, res) => {res.send("Hello from server side")})
app.listen(PORT, () => {
    console.log(`Server is running  at PORT ${PORT}`);
  });