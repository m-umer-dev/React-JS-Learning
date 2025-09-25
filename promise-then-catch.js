let p = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("This is the Promise One");
    res("Data is fetched");
    rej("Data is Not Fetch");
  }, 3000);
});

console.log(p);
p.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
