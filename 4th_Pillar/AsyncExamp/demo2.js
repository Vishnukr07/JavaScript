function timeConsumingByLoop()
{
    console.log("starts");

    for(let i = 0 ; i < 10000000000 ; i++)
    {
        // some tasks
    }
    console.log("loop ends");
}

function timeConsumingByRuntimeFeatures0()
{
    console.log("Starting timer0");

    setTimeout(function exe(){
        console.log("completed the timer0");
        for(let i = 0 ; i < 10000000000 ; i++)
        {
            // some task
        }
    },5000);
    
}
function timeConsumingByRuntimeFeatures1()
{
    console.log("Starting timer1");

    setTimeout(function exe(){
        console.log("completed the timer1");
    },10000);
    
}
function timeConsumingByRuntimeFeatures2()
{
    console.log("Starting timer2");

    setTimeout(function exe(){
        console.log("completed the timer2");
    },200);
    
}

console.log("hii");
timeConsumingByLoop();
timeConsumingByRuntimeFeatures0();
timeConsumingByRuntimeFeatures1();
timeConsumingByRuntimeFeatures2();
timeConsumingByLoop();

console.log("bye");