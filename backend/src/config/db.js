const mongoose = require("mongoose");
const Config = require(".");



const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Task-management');
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;