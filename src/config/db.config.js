const { MONGO_CONNECTION_STRING } = require("./server.config.js");
const mongoose = require("mongoose");

async function connectToMongoDb() {
  try {
    await mongoose.connect(MONGO_CONNECTION_STRING);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  connectToMongoDb,
};
