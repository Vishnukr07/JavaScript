let b = [10,11,12,2,3,4,6,0,7,2];

// js sort lexiographically
b.sort();
console.log(b);

// for sorting in increasing order we have to pass another function in sort fuunction
// As sort takes another function as an arguement so sort function is a HOF function.

b.sort(function(a,b)
{
    // if a < b , then a - b will be negative - if cmp function gives negative then a is placed before b (a < b)
    // if a > b , then a - b will positive - if cmp function gives positive then b is placed before a (a > b)
    return a - b;
});

console.log(b);