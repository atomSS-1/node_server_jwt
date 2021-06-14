require("dotenv").config({ path: "./env.test" });
const env = process.env.NODE_ENV;
const jsFile = require("./test2");
console.log(jsFile);
console.log(process.env.NODE_ENV);
const jsonfile = require("./test2")[env];
console.log(jsonfile);
