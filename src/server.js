const express = require("express");
const { PORT } = require("./Config/server.config");
const { connectToMongoDb } = require("./Config/db.config");
const apiRouter = require("./Routes");
const errorhandler = require("./Utils/errorHandler.util");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);
app.use(errorhandler);

app.listen(PORT, async () => {
  await connectToMongoDb();
  console.log(`Server started at port: ${PORT}`);
});
