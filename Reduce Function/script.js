/**
 * Reduce is a higher order function available for arrays
 * reduces also takes a function f as an argument
 * 
 * what does reduce does is , it one by one goes to every element of the array , 
 * 
 * say the current element is arr[i]
 * reduce will pass this element to the function f and accumulate the result of further function
 * calls with this particular result.
 */

const arr = [1,2,3,4,5,6];

function sum(prevResult , currentValue)
{
    // console.log(prevResult,currentValue);
    return prevResult + currentValue;
}

let res = arr.reduce(sum);

console.log(res);