const btn = document.querySelectorAll(".js-result-pointer_btn");
const calculate = {
  add: {
    className: "js-add",
    operator: "+",
    calculus: function () {
      return a + b;
    },
  },
  sub: {
    className: "js-sub",
    operator: "-",
    calculus: function () {
      return a - b;
    },
  },
  mul: {
    className: "js-mul",
    operator: "X",
    calculus: function () {
      return a * b;
    },
  },
  div: {
    className: "js-div",
    operator: "÷",
    calculus: function () {
      return a / b;
    },
  },
};
// const operators = Object.keys(calculate);
let firstValue = 0;
let secondValue = 0;

// function isNum(/* object */) {
//   if (/* !firstValue && !secondValue */ ){
//     object.errorMessage.textContent ="Please enter the empty value";
//   }
// }

function setNumbers(currentOperatorClassName) {
  let currentOperator = document.getElementsByClassName(
    currentOperatorClassName
  );
  firstValue = currentOperator[0].previousElementSibling.value;
  secondValue = currentOperator[0].nextElementSibling.value;
}

function findOperator(e) {
  const currentBtnClassList = e.target.classList;
  let currentOperatorClassName =
    currentBtnClassList[currentBtnClassList.length - 1]; // 클릭된 버튼의 클래스 배열중에 마지막 요소가 연산자를 나타내는 클래스
  setNumbers(currentOperatorClassName);
}

function init() {
  btn.forEach(() => addEventListener("click", findOperator));
}

init();
