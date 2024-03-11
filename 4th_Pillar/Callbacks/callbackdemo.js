/**
 * HOF aer those function whcih takes a function as an argument, the function we passes as an argument
 * is called callback function.
 */

function fun(x , exe)
{
    for(let i = 0 ; i < x ; i++)
    {
        console.log(i);
    }
    exe();
}

fun(10, function exe(){
    console.log("I am callBack function");
});

// setTimeout is also HOF

setTimeout(function exe() {// - this exe function is a callback function
    console.log("HII");
} , 4000);