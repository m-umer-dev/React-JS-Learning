// let loadScript = (sources) => {
//   return new Promise((res, rej) => {
//     let script = document.createElement("script");
//     script.src = sources;
//     document.body.appendChild(script);
//     script.onload = () => {
//       res("Script is loaded");
//     };
//     script.onerror = () => {
//       rej("Script is Failed");
//     };
//   });
// };

// let scriptFunction = loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
// );
// scriptFunction
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log(value);
//   });

// let loadScript = async (sources) => {
//   return new Promise((res, rej) => {
//     let script = document.createElement("script");
//     script.src = sources;
//     document.body.appendChild(script);
//     script.onload = () => {
//       res("Script is loaded");
//     };
//     script.onerror = () => {
//       rej("Script is Failed");
//     };
//   });
// };

// let main = async () => {
//   try {
//     let a = await loadScript(
//       "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
//     );
//     console.log(a);
//   } catch {
//     console.log("Not working");
//   }
// };
// main();

async function timer() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Error After 3 Sec...");
    }, 3000);
  });
}

let main = async () => {
  try {
    console.log("Pass");
  } catch {
    let a = await timer();
    console.log(a);
    console.log("not");
  }
};
