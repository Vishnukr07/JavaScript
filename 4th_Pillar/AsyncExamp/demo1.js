function timeConsumingByLoop()
{
    console.log("starts");

    for(let i = 0 ; i < 1000000000 ; i++)
    {
        // some tasks
    }
    console.log("loop ends");
}

function timeConsumingByRuntimeFeatures()
{
    console.log("Start time");

    setTimeout(function exe(){
        console.log("completed");
    },5000);
}

console.log("hii");
timeConsumingByLoop();
timeConsumingByRuntimeFeatures();
timeConsumingByLoop();

console.log("bye");