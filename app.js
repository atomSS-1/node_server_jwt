"use strict";
if (process.env.NODE_ENV.trim() === "development") {
  require("dotenv").config({ path: __dirname + "/.env.development" });
} else if (process.env.NODE_ENV.trim() === "test") {
  require("dotenv").config({ path: __dirname + "/.env.test" });
} else if (process.env.NODE_ENV.trim() === "production") {
  require("dotenv").config({ path: __dirname + "/.env.production" });
}
var createError = require("http-errors");
var express = require("express");
var path = require("path");

var usersRouter = require("./routes/users");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("server error");
});

module.exports = app;
