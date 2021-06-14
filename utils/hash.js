"use strict";
const bcrypt = require("bcrypt");

async function hash(element) {
  try {
    const saltRounds = 10;

    const hashedElement = await bcrypt.hash(element.toString(), saltRounds);

    return hashedElement;
  } catch (err) {
    console.log(err);
    next(err);
  }
}
async function compareHash(password, userPassword, next) {
  try {
    const match = await bcrypt.compare(password.toString(), userPassword);
    return match;
  } catch (err) {
    console.log(err);
    next(err);
  }
}
module.exports = {
  hash,
  compareHash,
};
