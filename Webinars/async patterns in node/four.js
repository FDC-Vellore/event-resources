// why async
const fs = require("fs");

// calback (...) => {}

// callback -> called when a func is done exec. NON BLOCKING
// ASYNC
fs.readFile("./input.txt", "utf8", console.log)
console.log("hello")

// buffers
// SYNC
// let txt = fs.readFileSync("./input.txt", "utf8")
// console.log(txt)
// console.log("hi")