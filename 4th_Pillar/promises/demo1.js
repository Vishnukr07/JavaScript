// how to consume promise object......

function createProimseWithSetTimeout() {
    return new Promise(function executor(resolve, reject) {
        console.log("Entering the executor callback in the promise constructor ");
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

     console.log("Exiting the executor callback in the promise constructor ");
   });
}

console.log("Starting....");

const p = createProimseWithSetTimeout();

console.log("Now we are waiting for the promise to complete");

console.log("currently my promise object is like ...." , p);

p.then(
  function fulfillmenthandler (value){
    console.log("Inside fulfillment handler with value" , value);
    console.log("promise after fulfillment" , p);
  } 
, function rejectionhandler (value) {
    console.log("Inside rejection handler with value" , value);
    console.log("promise after rejection" , p);
});

