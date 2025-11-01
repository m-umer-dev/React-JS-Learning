console.log("Script is Working");

let screen_value = document.querySelector(".screen-sec p");

let btn = document.querySelectorAll("button");
let added = document.querySelector("#added");
let sub = document.querySelector("#sub");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let clear = document.querySelector("#clear");

function updateOperator() {
  let scr = screen_value.textContent;

  added.disabled = scr.includes("+");
  sub.disabled = scr.includes("-");
  multiply.disabled = scr.includes("*");
  divide.disabled = scr.includes("/");
}

btn.forEach((butn) => {
  butn.addEventListener("click", () => {
    let value = butn.textContent;
    let lastchar = screen_value.textContent.slice(-1);
    let operators = ["+", "-", "*", "/"];

    if (butn.id === "clear") {
      screen_value.textContent = "0";
      updateOperator();
      return;
    }

    if (operators.includes(value) && operators.includes(lastchar)) {
      return;
    }

    if (screen_value.textContent === "0") {
      screen_value.textContent = value;
    } else {
      screen_value.textContent += value;
    }
    updateOperator();
  });
});
