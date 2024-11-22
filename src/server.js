const express = require("express");
const { PORT } = require("./config/server.config");
const { connectToMongoDb } = require("./config/db.config");
const apiRouter = require("./Routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, async () => {
  await connectToMongoDb();
  app.use("/api", apiRouter);
  console.log(`Server started at port: ${PORT}`);
});
