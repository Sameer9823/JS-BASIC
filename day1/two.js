// // // // // // const score = 500000
// // // // // // console.log(score);
// // // // // // console.log(score.toString().length);
// // // // // // console.log(score.toFixed(2));
// // // // // // console.log(score.toLocaleString('en-IN'));


// // // // // // // ************* maths *************

// // // // // // console.log(Math)
// // // // // // console.log(Math.abs(-4));
// // // // // // console.log(Math.round(5.8));
// // // // // // console.log(Math.ceil(5.3));
// // // // // // console.log(Math.floor(5.8));
// // // // // // console.log(Math.sqrt(4));
// // // // // // console.log(Math.max(4, 5, 8,2,10));
// // // // // // // console.log(Math.floor(Math.random() * 10) + 1);

// // // // // // // const min = 1
// // // // // // // const max = 6

// // // // // // // console.log(Math.floor(Math.random() * ((max - min) + 1)) + min);


// // // // // // //date time

// // // // // // const date = new Date()
// // // // // // console.log(date.toDateString());
// // // // // // console.log(date.toLocaleString('en-IN'));
// // // // // // console.log(typeof date);

// // // // // // let dateString = new Date(2024, 0, 24, 5, 8)

// // // // // // console.log(dateString.toLocaleString());

// // // // // // console.log(dateString.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));

// // // // // // let myTimeStamp = Date.now();
// // // // // // console.log(myTimeStamp);
// // // // // // console.log(date.getTime());
// // // // // // console.log(Math.floor(Date.now()/1000));





// // // // // let newDate = new Date()
// // // // // console.log(newDate.getMonth());
// // // // // console.log(newDate.getDay());

// // // // // console.log(newDate.toLocaleString('en-US'), {
// // // // //     weekday: 'string',
// // // // //     year: 'numeric',
// // // // //     month: 'long',
// // // // //     day: 'numeric',
// // // // //     hour: 'numeric',
// // // // //     minute: 'numeric',
// // // // //     second: 'numeric',
    
// // // // // });


// // // // // array
// // // // const arr = [0,1,2,3,4,5,6,7,8,9]
// // // // const arr1 = ['sameer', 'geet', 'vaish']
// // // // console.log([...arr, ...arr1]);

// // // //  //methods

// // // // const fruits = ['apple', 'banana', 'mango', 'orange', 'grapes']
// // // // console.log(fruits.length);
// // // // fruits.push('jfvejb')
// // // // console.log(fruits);

// // // // fruits.pop()
// // // // console.log(fruits);

// // // // fruits.unshift('kiwi')
// // // // console.log(fruits);

// // // // fruits.shift()

// // // // console.log(fruits);
// // // // console.log(fruits.includes('banana'));

// // // const newArr = ['apple', 'banana', 'mango', 'orange', 'pepper', 'grapes']
// // // console.log(newArr.join('-'));

// // // //slice, splice

// // // // console.log("A ", newArr);
// // // // console.log(newArr.slice(1, 3));

// // // // console.log("B ", newArr);

// // // console.log("A ", newArr);
// // // console.log(newArr.splice(1, 4));

// // // console.log("B ", newArr);



// // const marvel = ["thor", "ironman", "captain", "vision"]
// // const dc_heros = ["batman", "superman", "flash", "wonderwoman"]

// // const heros = marvel.concat(dc_heros)
// // // console.log(heros);
// // // console.log([...marvel, ...dc_heros]); spread operator

// // const another_array = [1,2,3,4 ,[3,4,5,6,7,8], [5,6,7,8]]
// // let other_array = another_array.flat()
// // console.log(other_array);

// // Array.isArray(another_array) ? console.log("yes") : console.log("no");

// // let score1 = 100
// // let score2 = 200
// // console.log(Array.of(score1,score2));

// // console.log(Array.from("sameer"));




// // const sammy = ["sameer", "geet", "vaish"]
// // for (const sam of sammy) {
// //     console.log(sam);
    
// // }

// // let numbers = [1,2,3,4,5,6,7,8,9]
// // numbers.forEach(element => {
// //     console.log(element);

    
// // });



// const r = ["sameer", "vaishu", "geet", "ashu"]
// // console.log(r.reverse());
// // console.log(r.includes('vaishu'));
// // console.log(r.indexOf('geet'));
// // const s = r.unshift('sam')
// // console.log(r);
// // r.forEach((e) => console.log(e))
// // for (const ss of r) {
// //     console.log(ss);
    
// // }
// console.log(r.splice(3, 3, 'ashu'));
// console.log(r);

// console.log(Array.from('sameer'));

// a = 100
// b = 300
// console.log(Array.of(a, b));

// console.log(Array.isArray(r));



const fruit = []
fruit[0] = "apple"
fruit[1] = 'banana'
console.log(fruit);


let num = [`one`, `two`, `three`, `four`, `five`]
num[3] ="sameer"
// delete num[2]
console.log(num);

for (const i of num) {
    // console.log(i);
    
}

for (let index = 0; index < num.length; index++) {
    // console.log(num[index]);
    ;
    
}

let index = 0

while (num.length > index) {
// console.log(num[index]);
index++

    
}
// num.forEach((e) => console.log(e));

console.log(num.join('-'));

// console.log(num.slice(1, 3));
// console.log(num);

// console.log(num.splice(1, 3, 'sam'));
console.log(num);

console.log(Array.from("SAMEER"));
console.log(Array.isArray(num));

let [one, two, three] = num
console.log(one);
console.log(two);

console.log(one, two, three);







