function createProimse()
{
    return new Promise(function executor(resolve , reject){

        console.log("resolving the promise");
        resolve("done");
    });

}

setTimeout(function f()
{
    console.log("Timer completed");

} , 0);

let p = createProimse();

p.then(function fulfillhandler(value){
    console.log("We fulfilled1 the value" , value);

} 
, function rejectionhandler(value){});
p.then(function fulfillhandler(value){
    console.log("We fulfilled2 the value" , value);
} 
, function rejectionhandler(value){});
p.then(function fulfillhandler(value){
    console.log("We fulfilled3 the value" , value);

} 
, function rejectionhandler(value){});

for(let i = 0 ; i < 1000000000; i++) {};

console.log("Ending");
// once the state of prmoise is changed  , let all the fullfillment handler goes to 
// microtask queue and sit tight and wait for call of event loop
// event loop priortise microtask queue over call back queue.