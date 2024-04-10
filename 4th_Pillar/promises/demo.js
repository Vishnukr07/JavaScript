function createProimseWithLoop() {
    return new Promise(function executor(resolve, reject) {
        for (let i = 0; i < 1000000; i++) { }
        let max = 5;
        let num = Math.floor(Math.random() * max)

        if (num & 1) {
            reject(num);

        }
        else {
            resolve(num);

        }
    })
}

let x = createProimseWithLoop();
console.log(x);

// by set timeout run- time features;

function createProimseWithSetTimeout() {
    return new Promise(function executor(resolve, reject) {

        setTimeout(function (){
        let max = 5;
        let num = Math.floor(Math.random() * max)

        if (num & 1) {
            reject(num);

        }
        else {
            resolve(num);

            }
        }, 10000);
   })
}

let y = createProimseWithSetTimeout();
console.log(y);