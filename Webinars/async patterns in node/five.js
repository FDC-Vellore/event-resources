
// promises
// bai == maid 

// resolve, reject, catch, then


// promisification
let newPrintSome = (query) => {
    return new Promise((resolve, reject) => {
        for(let i=0; i<100; i++) {
            console.log(query)
        }
        if(query === 1) {
            reject("no i haven't returned")
        }
        resolve(query)
    })
}


newPrintSome(1)
.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

console.log("\n\n HAAHAHAHA I AM TESTING ASYNC \n\n")
