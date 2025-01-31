// const promiseOne = new Promise((resolve, reject) => {
//   //Do an async task
//   //DB calls, cryptography, network
//   setTimeout(function () {
//     console.log("Async task is complelete");
//     resolve();
//   }, 1000);
// });

// promiseOne
//   .then((e) => console.log("promise resolve"))
//   .catch((e) => console.log("dfvf"));

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("async task 2");
//     resolve();
//   }, 1000);
// }).then(() => console.log("async 2 resolve"));

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "chai", email: "example@gmail.com" });
//   }, 1000);
// });

// promiseThree.then((e) => {
//   console.log(e);
// });

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "sameer", password: "1234" });
//     } else {
//       reject("error something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((e) => {
//     console.log(e);
//     return e.username;
//   })
//   .then((i) => {
//     console.log(i);
//   })
//   .catch((err) => {
//     console.log(err);
//   }).finally((e) => {
//     console.log("the promise is either resolve or rejected");

//   })

//   const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//           resolve({ username: "javascript", password: "1234" });
//         } else {
//           reject("error something went wrong");
//         }
//       }, 1000);
//   })

// async function consume() {
//     try {

//         const res =  await promiseFive
//         console.log(res);
//     } catch (error) {
//         console.log(error);

//     }

// }
// consume()

const api = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// api();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
