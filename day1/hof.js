// // // // // //for of

// // // // // let arr = ["sam", "ram", "tan", "pan"];
// // // // // // for (const i of arr) {
// // // // // //   //   console.log(i);
// // // // // // }

// // // // // arr.forEach((e, i, a) => {
// // // // //     console.log(e, i, a);

// // // // // });

// // // // // //maps

// // // // // arr.map((e) => console.log(e));

// // // // // const maps = new Map();
// // // // // maps.set("in", "india");
// // // // // maps.set("ifn", "ifndia");
// // // // // maps.set("ihn", "indjia");

// // // // // console.log(maps);

// // // // // for (const [i, val] of maps) {
// // // // //   console.log(i);
// // // // // }

// // // // const code = [
// // // //   {
// // // //     name: "sameer",
// // // //     age: 56,
// // // //   },
// // // //   {
// // // //     name: "sdsd",
// // // //     age: 56,
// // // //   },
// // // //   {
// // // //     name: "slmkameer",
// // // //     age: 56,
// // // //   },
// // // //   {
// // // //     name: "samkjnjeer",
// // // //     age: 56,
// // // //   },
// // // // ];

// // // // // code.forEach((item, i, a) => console.log(item.name + item.age));

// // // // const values = ["sam", "ram", "tan", "pan"];

// // // // const result = values.forEach((i) => {
// // // //     console.log(i);
// // // //     // return i

// // // // })

// // // // console.log(result);

//defination of filter method in javascript 
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const nums = [1,2,3,4,5,6,7,8,9,10]

const result = nums.filter((i) => i > 6)
console.log(result);
console.log(nums);



// // // // const  news = []

// // // // nums.forEach((num)=> {
// // // //     if(num > 4){
// // // //         news.push(num)
// // // //     }
// // // // })

// // // // console.log(news);

// // // const obj = [
// // //     {
// // //       "title": "The Mystery of the Hidden Island",
// // //       "genre": "Mystery",
// // //       "publish_date": "2023-06-15",
// // //       "publisher": "Ocean Breeze Publishing"
// // //     },
// // //     {
// // //       "title": "Beyond the Stars",
// // //       "genre": "Science Fiction",
// // //       "publish_date": "2022-11-10",
// // //       "publisher": "Galaxy Frontier Press"
// // //     },
// // //     {
// // //       "title": "Whispers in the Dark",
// // //       "genre": "Horror",
// // //       "publish_date": "2021-10-31",
// // //       "publisher": "Nightfall House"
// // //     },
// // //     {
// // //       "title": "A Journey Through Time",
// // //       "genre": "Historical Fiction",
// // //       "publish_date": "2024-04-20",
// // //       "publisher": "Timeless Tales Publishing"
// // //     },
// // //     {
// // //       "title": "The Art of Living",
// // //       "genre": "Self-Help",
// // //       "publish_date": "2023-01-05",
// // //       "publisher": "Life Lessons Inc."
// // //     }
// // //   ]

// // //   const result = obj.filter((i) => i.publish_date > "2021-10-31" && i.genre === "Science Fiction")
// // //   console.log(result);

// // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // // const result = nums.map((i) => i + 2)
// // // console.log(result);

// // const news = nums.map((num) => num * 10).map((num) => num + 2).filter((num) => num > 50);
// // console.log(news);


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = nums.reduce((acc, curr) => acc + curr, 0)
// console.log(result);


// const cart = [
//     {
//         name: "wewe",
//         price: 100

//     },
//     {
//         name: "erfrf",
//         price: 300
//     },
//     {
//         name: "jhve",
//         price: 200
//     }
// ]

// const total = cart.reduce((acc, item) => acc + item.price, 0)
// console.log(total);

