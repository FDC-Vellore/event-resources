// sync code
// line1
// line2
// heavy func
// line3

let printSome = (query) => {
    for(let i=0; i<20; i++) {
        console.log(query)
    }
} 

module.exports.printMore = (query) => {
    for(let i=0; i<30; i++) {
        console.log(query)
    }
}