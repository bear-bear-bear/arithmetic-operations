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
    operator: "��",
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
    currentBtnClassList[currentBtnClassList.length - 1]; // Ŭ���� ��ư�� Ŭ���� �迭�߿� ������ ��Ұ� �����ڸ� ��Ÿ���� Ŭ����
  setNumbers(currentOperatorClassName);
}

function init() {
  btn.forEach(() => addEventListener("click", findOperator));
}

init();
