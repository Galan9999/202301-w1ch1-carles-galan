let displayPastValue = document.querySelector(".pastValue");
let displayCurrentValue = document.querySelector(".currentValue");

const buttonNumbers = document.querySelectorAll(".number");
const buttonOperators = document.querySelectorAll(".operator");

const buttonSqrt = document.querySelector(".sqrt");
const buttonDeleteOne = document.querySelector(".delete-one");
const buttonDeleteAll = document.querySelector(".delete-all");

const getNumbers = () => {
  buttonNumbers.forEach((number) => {
    number.onclick = () => {
      displayCurrentValue.textContent =
        displayCurrentValue.textContent + number.textContent;
    };
  });
};
getNumbers();

getOperators = () => {
  buttonOperators.forEach((operator) => {
    operator.onclick = () => {
      if (displayCurrentValue.textContent === "" || "string") return "error";
      displayCurrentValue.textContent =
        displayCurrentValue.textContent + operator.textContent;
    };
  });
};
getOperators();
