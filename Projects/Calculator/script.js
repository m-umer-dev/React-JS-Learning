let screen_value = document.querySelector(".screen-sec p");
let btn = document.querySelectorAll("button");
let added = document.querySelector("#added");
let sub = document.querySelector("#sub");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");

let justCalculated = false;

function updateOperator() {
  let lastChar = screen_value.textContent.slice(-1);
  let operators = ["+", "-", "*", "/"];
  let disabled = operators.includes(lastChar);

  added.disabled = disabled;
  sub.disabled = disabled;
  multiply.disabled = disabled;
  divide.disabled = disabled;
}

btn.forEach((butn) => {
  butn.addEventListener("click", () => {
    let value = butn.textContent;

    if (butn.id === "clear") {
      screen_value.textContent = "0";
      justCalculated = false;
      updateOperator();
      return;
    }

    if (butn.id === "equal") {
      let expr = screen_value.textContent;

      try {
        let result = eval(expr);
        screen_value.textContent = result;
        justCalculated = true;
      } catch (error) {
        screen_value.textContent = "Error";
      }

      updateOperator();
      return;
    }

    if (justCalculated && !["+", "-", "*", "/"].includes(value)) {
      screen_value.textContent = value;
      justCalculated = false;
      updateOperator();
      return;
    }

    if (value === "." && screen_value.textContent.slice(-1) === ".") {
      return;
    }

    if (screen_value.textContent === "0") {
      screen_value.textContent = value;
    } else {
      screen_value.textContent += value;
    }

    justCalculated = false;
    updateOperator();
  });
});
