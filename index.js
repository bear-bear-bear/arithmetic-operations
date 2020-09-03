const firstValue = document.querySelector("#firstValue").value;
const secondValue = document.querySelector("#secondValue").value;
const result = document.querySelector("#result").textContent;
const errorMessage = document.querySelector("#errorMessage");

if (firstValue) {
  if (secondValue) {
    result = firstValue * secondValue;
  } else {
    errorMessage.textContent = "Please enter the second value";
  }
} else {
  errorMessage.textContent = "Please enter the first value";
}

function init() {}
