const currentDate = new Date();
const sameDate = new Date();
sameDate.setTime(currentDate.getTime());
console.log(sameDate.toLocaleString());

//setinterval
// const exSetInterval = setInterval(myRepeatedMessage, 3000);
// function myRepeatedMessage()
// {
// console.log('Hi');
// console.log('Hi Again !');
// }

//settimeout
const exSetTimeout = setTimeout(myMessage, 3000);
function myMessage()
{
console.log('Hi');
}


let cc = setInterval(timer, 1000);
function timer() {
const date = new Date();
const newTime = date.toLocaleTimeString();
console.log(newTime);
clearInterval(cc)
}

