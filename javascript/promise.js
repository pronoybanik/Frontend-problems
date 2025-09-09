
// const promiseOne = new Promise((resolve, reject) => {
//     let completedPromise = false;
//     if (completedPromise) {
//         resolve("complete promise ")
//     } else {
//         reject(new Error("Not complete promise "))
//     }
// })

// promiseOne
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

    
console.log("Start");

setTimeout(() => {
    console.log("Timeout Callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Callback");
});

console.log("End");
