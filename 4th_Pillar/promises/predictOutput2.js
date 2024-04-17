function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("starting Downlaoding" , url);

        setTimeout(function processDownloading(){
            let data = "dummy data";
            resolve(data);
            console.log("Downlaoding completed");
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