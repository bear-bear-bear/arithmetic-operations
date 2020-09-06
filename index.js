/*
���� ���� �ڽ� �θ� ������ �����ȣ, ȭ��ǥ��ư, �����, �����޼����� ����� Ư�� Ŭ����_KeyClass�� �ο��� �����Դϴ�.
(ex- ���ϱ� �ڽ� �ȿ��� ���� Ŭ���� js-add �ο�)
  _KeyClass.classList[0] >> �����ȣ
  _KeyClass.classList[1] >> ȭ��ǥ��ư
  _KeyClass.classList[2] >> �����
  _KeyClass.classList[3] >> ���� �޼���
Ŭ�� �̺�Ʈ�� �����ϴ� ȭ��ǥ ��ư�� KeyClass �� �������� �ùٸ� ������ ����� ��Ȯ�� ��ġ�� ����մϴ�.
-------------------------------------------
given a specific class_KeyClass that is common to computational symbols, arrow buttons, results, error messages with the same calculator box parents.
(ex- 'addition-box' has KeyClass 'js-add')
  _KeyClass.classList[0] >> computational symbol
  _KeyClass.classList[1] >> arrow button
  _KeyClass.classList[2] >> result value
  _KeyClass.classList[3] >> error message
print the results of the correct equation in the correct position based on KeyClass in the arrow buttons that respond to the click event.
*/

const btn = document.querySelectorAll(".js-result-pointer_btn");

let current = {
  keyClass: "",
  operator: "",
  firstNum: 0,
  secondNum: 0,
  errorMessage: "",
  result: "",
};
const calculate = {
  add: {
    symbol: "+",
    calculus: function () {
      return current.firstNum + current.secondNum;
    },
  },
  sub: {
    symbol: "-",
    calculus: function () {
      return current.firstNum - current.secondNum;
    },
  },
  mul: {
    symbol: "X",
    calculus: function () {
      return current.firstNum * current.secondNum;
    },
  },
  div: {
    symbol: "/",
    calculus: function () {
      return current.firstNum / current.secondNum;
    },
  },
};
const operators = Object.keys(calculate);

function getResult(currentOperator, currentkeyClass) {
  current.result = document.getElementsByClassName(currentkeyClass)[2];

  operators.forEach((operator) => {
    if (calculate[operator]["symbol"] === currentOperator) {
      current.result.textContent = calculate[operator].calculus();
    }
  });
}

function isNum(currentkeyClass) {
  current.errorMessage = document.getElementsByClassName(currentkeyClass)[3];

  if (current.firstNum && current.secondNum) {
    current.errorMessage.textContent = "";
  } else {
    current.errorMessage.textContent = "Please enter the empty value";
  }
}

function setEquation(currentkeyClass) {
  let currentOperatorWrapper = document.getElementsByClassName(
    currentkeyClass
  )[0];

  current.operator = currentOperatorWrapper.textContent;
  current.firstNum = parseInt(
    currentOperatorWrapper.previousElementSibling.value
  );
  current.secondNum = parseInt(currentOperatorWrapper.nextElementSibling.value);

  isNum(currentkeyClass);
  getResult(current.operator, currentkeyClass);
}

function findKeyClass(e) {
  const currentBtnClassList = e.target.classList;

  current.keyClass = currentBtnClassList[currentBtnClassList.length - 1];

  setEquation(current.keyClass);
}

function init() {
  btn.forEach((button) =>
    button.addEventListener("click", findKeyClass, false)
  );
}

init();
