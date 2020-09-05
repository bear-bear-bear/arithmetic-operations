const btn = document.querySelectorAll(".js-result-pointer_btn");
const a = document.querySelectorAll(".js-firstValue").value;
const b = document.querySelectorAll(".js-secondValue").value;

const calculate = {
  add: {
    name: "add",
    symbol: "+",
    calculus: function () {
      return a + b;
    },
  },
  sub: {
    name: "sub",
    symbol: "-",
    calculus: function () {
      return a - b;
    },
  },
  mul: {
    name: "mul",
    symbol: "X",
    calculus: function () {
      return a * b;
    },
  },
  div: {
    name: "div",
    symbol: "¡À",
    calculus: function () {
      return a / b;
    },
  },
};

// function isNum(/* object */) {
//   if (/* !firstValue && !secondValue */ ){
//     object.errorMessage.textContent ="Please enter the empty value";
//   }
// }

function init() {
  btn.addEventListener("click");
}

init();
