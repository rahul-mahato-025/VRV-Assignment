const { MONGO_CONNECTION_STRING } = require("./server.config");
const { connect } = require("mongoose");

async function connectToMongoDb() {
  try {
    await connect(MONGO_CONNECTION_STRING);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  connectToMongoDb,
};
