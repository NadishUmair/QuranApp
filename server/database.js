require("dotenv").config();

const mongoose = require("mongoose");
const mongo_uri = process.env.MONGO_URI;

const ConnectDB = () => {
  mongoose
    .connect(mongo_uri)
    .then(() => {
      console.log("Database Connected Succesfulyy Yeayy!!");
    })
    .catch((error) => {
      console.log("Error in Connecting Database afsoos", error);
    });
};

module.exports = ConnectDB;
