/**
 * problems : - 1. inversion of control, 2. callBack hell : - nested callback function
 *  
 */

// created by teamA
function doTask(exe , x)
// whole implementation is done by team A
{
    exe(x * x);
    // twice write the function , this will be the problem
    exe(x * x);
}

// here team B tries to use it,
doTask(function exe(num){ // due to callbacks, i am passing control how exec should be called to doTak
    // this is inversion of control
    console.log("Result is :",num);
},9);