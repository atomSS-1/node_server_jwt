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
async function compareHash(user) {
  try {
    const match = await bcrypt.compare(password, user.passwordHash);
  } catch (err) {
    console.log(err);
    return "비교 에러";
  }
}
module.exports = {
  hash,
  compareHash,
};
