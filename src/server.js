const express = require("express");
const { PORT, MONGO_CONNECTION_STRING } = require("./config/server.config");
const { connectToMongoDb } = require("./config/db.config");

const app = express();

app.listen(PORT, async () => {
  await connectToMongoDb();
  console.log(`Server started at port: ${PORT}`);
});
