const fs = require("fs");
const util = require("util")

let baibai = util.promisify(fs.readFile)

// read1 -> read2 -> read3 ->...

// callback hell
// baibai("./input.txt", "utf8")
// .then((text) => {
//     console.log(text)
//     baibai("./input.1.txt", "utf8")
//     .then((e)=>{
//         console.log(e)
//         baibai("./input.2.txt", "utf8")
//         .then(console.log)
//         .catch(console.log)
//     })
//     .catch(console.log)
// }).catch((err) => {
//     console.error(err)
// })

let promiseArr = []

for(let i=1;i<7;i++) {
    promiseArr.push(baibai(`./input.${i}.txt`, "utf8"))
}

Promise.all(promiseArr)
.then(console.log)
.catch(() => {
    console.log("what is life. zindagi kya hai")
})
console.log("hello")

// code below doesnt need to wait for the code above