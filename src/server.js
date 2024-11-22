const express = require("express");
const { PORT } = require("./config/server.config");
const { connectToMongoDb } = require("./config/db.config");
const apiRouter = require("./Routes");

const app = express();
app.use("/api", apiRouter);

app.listen(PORT, async () => {
  await connectToMongoDb();
  console.log(`Server started at port: ${PORT}`);
});
