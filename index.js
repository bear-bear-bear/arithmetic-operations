document
  .querySelector(".js-result-pointer_btn")
  .addEventListener("click", () => {
    const firstValue = document.querySelector(".js-firstValue").value;
    const secondValue = document.querySelector(".js-secondValue").value;

    if (firstValue) {
      if (secondValue) {
        document.querySelector(".js-result").textContent =
          firstValue * secondValue;
        document.querySelector(".js-errorMessage").textContent = "";
      } else {
        document.querySelector(".js-errorMessage").textContent =
          "Please enter the second value";
      }
    } else {
      document.querySelector(".js-errorMessage").textContent =
        "Please enter the first value";
    }
  });
