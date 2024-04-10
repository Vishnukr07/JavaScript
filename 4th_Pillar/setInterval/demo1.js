let x = setInterval(function exe() {
    console.log("hii");
} , 1000);

clearInterval(x);

console.log(typeof(x));
