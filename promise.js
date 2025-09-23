//simple example

console.log("This is before the Promise");
setTimeout(() => {
  console.log("This is print after 3 sec");
}, 3000);
console.log("This is after the promise");

//Tea example
console.log("Start Tea Making");
setTimeout(() => {
  console.log("Tea is Done");
}, 3000);
console.log("Biscuits is settle in the plate");
console.log("Plate is in the Tray and Dish is ready");

//Two States of promise

let promise = new Promise((res, rej) => {
  res(56);
});

console.log(promise);
