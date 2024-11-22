const dotenv = require("dotenv");
dotenv.config({});

module.exports = {
  PORT: process.env.PORT || 3001,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
};
