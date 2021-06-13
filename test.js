const env = process.env.NOD_ENV || "test";
const jsonfile = require("./test.json")[env];
console.log(jsonfile);
