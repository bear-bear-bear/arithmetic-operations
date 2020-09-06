// html �󿡼� ���� ���� �ڽ� �θ� ������ �����ȣ, ȭ��ǥ��ư, ������� ����� Ŭ����_KeyClass �� �ο���
//  (ex- ���ϱ� �ڽ� �ȿ��� ���� Ŭ���� js-add �ο�)
// Ŭ�� �̺�Ʈ�� �����ϴ� ȭ��ǥ ��ư�� KeyClass �� �������� �ùٸ� ������ ����� ��Ȯ�� ��ġ�� ���

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
let currentKeyClass = "";

// function setCalculus() {
//   console.log(calculate.add.className);
// }

function setNumbers() {
  let currentOperator = document.getElementsByClassName(currentKeyClass);
  firstValue = currentOperator[0].previousElementSibling.value;
  secondValue = currentOperator[0].nextElementSibling.value;
  console.log(`firstValue is ${firstValue}, secondValue is ${secondValue}`);
}

function findKeyClass(e) {
  const currentBtnClassList = e.target.classList;
  currentKeyClass = currentBtnClassList[currentBtnClassList.length - 1]; // Ŭ���� ��ư�� Ŭ���� �迭�߿� ������ ��Ұ� �����ڸ� ��Ÿ���� Ŭ����
  setNumbers();
  setCalculus();
  console.log(`currenKeyClass is ${currentKeyClass}`);
}

// function isNum(/* object */) {
//   if (/* !firstValue && !secondValue */ ){
//     object.errorMessage.textContent ="Please enter the empty value";
//   }
// }

function init() {
  btn.forEach((button) =>
    button.addEventListener("click", findKeyClass, false)
  );
}

init();
