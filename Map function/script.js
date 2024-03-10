const arr = [2 , 3 , 5, 6];

function print(element , index)
{
    return `Element at ${index} is ${element}`;
}
// predefined map function
var res = arr.map(print);
console.log(res);

// own custom map function
function customMapper(arr , func)
{
    let res= [];

    for(let i = 0 ; i < arr.length ; i++)
    {
        res.push(func(arr[i],i));
    }
    return res;
}

let result = customMapper(arr,print);

console.log(result);
