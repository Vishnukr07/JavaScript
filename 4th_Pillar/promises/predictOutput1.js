function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("starting Downlaoding");

        setTimeout(function processDownloading(){
            let data = "dummy data";
            console.log("Downlaoding completed");
            resolve(data);
        } , 7000)
    })
}

console.log("start");

let promiseObj = fetchData("asdfgsdf");

promiseObj.then(function A(value)
{
    console.log("value is " , value);

})
console.log("end");