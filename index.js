/*
���� ���� �ڽ� �θ� ������ �����ȣ, ȭ��ǥ��ư, ������� ����� Ư�� Ŭ����_KeyClass�� �ο��� �����Դϴ�.
(ex- ���ϱ� �ڽ� �ȿ��� ���� Ŭ���� js-add �ο�)
  _KeyClass.classList[0] >> �����ȣ
  _KeyClass.classList[1] >> ȭ��ǥ��ư
  _KeyClass.classList[2] >> �����
Ŭ�� �̺�Ʈ�� �����ϴ� ȭ��ǥ ��ư�� KeyClass �� �������� �ùٸ� ������ ����� ��Ȯ�� ��ġ�� ����մϴ�.
-------------------------------------------
given a specific class_KeyClass that is common to computational symbols, arrow buttons, and results with the same calculator box parents.
(ex- 'addition-box' has KeyClass 'js-add')
  _KeyClass.classList[0] >> computational symbol
  _KeyClass.classList[1] >> arrow button
  _KeyClass.classList[2] >> Result Value
print the results of the correct equation in the correct position based on KeyClass in the arrow buttons that respond to the click event.
*/

const btn = document.querySelectorAll(".js-result-pointer_btn");

const calculate = {
  add: {
    symbol: "+",
    calculus: function () {
      return firstNum + secondNum;
    },
  },
  sub: {
    symbol: "-",
    calculus: function () {
      return firstNum - secondNum;
    },
  },
  mul: {
    symbol: "X",
    calculus: function () {
      return firstNum * secondNum;
    },
  },
  div: {
    symbol: "/",
    calculus: function () {
      return firstNum / secondNum;
    },
  },
};
const operators = Object.keys(calculate);
let firstNum = 0;
let secondNum = 0;
let currentOperator = "";

function getResult(currentOperator, currentKeyClass) {
  let resultBox = document.getElementsByClassName(currentKeyClass)[2];

  operators.forEach((operator) => {
    if (calculate[operator]["symbol"] === currentOperator) {
      resultBox.textContent = calculate[operator].calculus();
    }
  });
}

function setEquation(currentKeyClass) {
  let currentOperatorWrapper = document.getElementsByClassName(
    currentKeyClass
  )[0];

  currentOperator = currentOperatorWrapper.textContent;
  firstNum = parseInt(currentOperatorWrapper.previousElementSibling.value);
  secondNum = parseInt(currentOperatorWrapper.nextElementSibling.value);

  getResult(currentOperator, currentKeyClass);
}

function findKeyClass(e) {
  const currentBtnClassList = e.target.classList;

  currentKeyClass = currentBtnClassList[currentBtnClassList.length - 1];
  setEquation(currentKeyClass);
}

// function isNum(/* object */) {
//   if (/* !firstNum && !secondNum */ ){
//     object.errorMessage.textContent ="Please enter the empty value";
//   }
// }

function init() {
  btn.forEach((button) =>
    button.addEventListener("click", findKeyClass, false)
  );
}

init();
