const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { PORT } = require("./Config/server.config");
const { connectToMongoDb } = require("./Config/db.config");
const apiRouter = require("./Routes");
const errorhandler = require("./Utils/errorHandler.util");
const morgan = require("morgan");

const app = express();
app.use(cors({}));
app.use(cookieParser());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);
app.use(errorhandler);

app.listen(PORT, async () => {
  await connectToMongoDb();
  console.log(`Server started at port: ${PORT}`);
});
