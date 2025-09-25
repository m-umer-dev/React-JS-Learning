// let pro1 = new Promise((res, rej) => {
//   console.log("This is promise one which is print after 3 sec");
//   setTimeout(() => {
//     res("200 Ok!");
//   }, 3000);
// });
// pro1
//   .then((value) => {
//     console.log(value);
//     let pro2 = new Promise((res, rej) => {
//       res("301 ok!");
//     });
//     return pro2;
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Script load function using promise

let loadScript = (src) => {
  return new Promise((res, rej) => {
    let script = document.createElement("Script");
    script.src = src;
    script.onload(() => {
      res("Script is load");
    });
    script.onerror(() => {
      rej("Script is not laoded");
    });
  });
};

let callScript = loadScript("https://localhost:3000/");
callScript
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
