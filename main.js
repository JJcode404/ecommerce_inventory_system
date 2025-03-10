const path = require("node:path");
const express = require("express");
const newMessageRouter = require("./routers/newMessages");
const { indexRouter } = require("./routers/indexRouter");
const assetsPath = path.join(__dirname, "public");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));
app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use((err, req, res, next) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  res
    .status(statusCode)
    .json({ error: err.message || "Internal Server Error" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
