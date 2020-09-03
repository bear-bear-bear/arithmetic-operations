document.querySelector("input").addEventListener("change", () => {
  const firstValue = document.querySelector(".js-firstValue").value;
  const secondValue = document.querySelector(".js-secondValue").value;
  const result = document.querySelector(".js-result").textContent;
  const errorMessage = document.querySelector(".js-errorMessage").textContent;

  if (firstValue) {
    if (secondValue) {
      result = firstValue * secondValue;
    } else {
      errorMessage = "Please enter the second value";
    }
  } else {
    errorMessage = "Please enter the first value";
  }
});
