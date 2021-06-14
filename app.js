"use strict";
var path = require("path");
console.log(process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
  case "development":
    require("dotenv").config({ path: __dirname + "/env.development" });
    break;
  case "test":
    require("dotenv").config({ path: __dirname + "/env.test" });
    break;
  case "production":
    require("dotenv").config({ path: __dirname + "/env.production" });
    break;
  default:
    console.log("dot env load");
}
//require("dotenv").config({ path: __dirname + "/env.test" });
//console.log(`process.env.NODE_ENV=${process.env.NODE_ENV}`);
var createError = require("http-errors");
var express = require("express");

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
