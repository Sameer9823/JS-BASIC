// find , sort , every methods inarray

let arr = ["sameer", "vaish", "sam", "new york"]
let result = arr.find((el) => {
    return el.length == 8
})
console.log(result)
let result1 = arr.every((curr) => typeof curr == "string");
console.log(result1)

//sort
let numbers = [18, 15, 78, 97, 86];
console.log(numbers.sort());
let result2 = numbers.sort((a, b) => a - b)
console.log(result2)

//every
let result3 = numbers.every(function(el){
    return el < 10
})
console.log(result3)

//map

let result4 = arr.forEach((item) => console.log(item));
let result5 = arr.forEach((item, index, arraa) => {
    console.log(`the ${item} is at position ${index} The item in cart are ${arraa}`);
})

let result6 = numbers.map((item) => String(item))
console.log(result6)

let result8 = numbers.filter((item) => item < 78);
console.log(result8);

let resu4 = numbers.reduce((acc, curr) => acc + curr, 0)
console.log(resu4)



