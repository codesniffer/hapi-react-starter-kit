'use stricts'
var cats = require('./model/cats.js');
console.log(cats);
console.log("Hello World !!!")

function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

var p = timeout(1000).then(() => {
    console.log("first one")
    return timeout(2000);
}).then(() => {
    //throw new Error("hmm");
    console.log("second one");
}).catch(err => {
    return Promise.all([timeout(100), timeout(200)]);
})