/**
 * Filter Function
 * Filter function is also Higher order function
 * Filter also loops over the array element,\
 * 
 * There is one special thing about filter function , i.e. the argument function f
 * which we have to pass inside filter should always return a boolean,otherwise output will
 * be converted to a boolean
 * 
 * Filter loops every element , passes that element in the arguemnt function and then if
 * the output of this function call is true then it stores the orginial element in a new array
 * otherwise doesnt add this element to the array.
 */

let b= [0,1,3,4,6,7,8,10];

function isEvenOrOdd(x)
{
    return x % 2 == 0;

}

let res = b.filter(isEvenOrOdd);

console.log(res);