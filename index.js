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

const calculate = {
  add: {
    symbol: "+",
    calculus: function () {
      return currentFirstNum + currentSecondNum;
    },
  },
  sub: {
    symbol: "-",
    calculus: function () {
      return currentFirstNum - currentSecondNum;
    },
  },
  mul: {
    symbol: "X",
    calculus: function () {
      return currentFirstNum * currentSecondNum;
    },
  },
  div: {
    symbol: "/",
    calculus: function () {
      return currentFirstNum / currentSecondNum;
    },
  },
};
const operators = Object.keys(calculate);
let currentKeyClass = "";
let currentOperator = "";
let currentFirstNum = 0;
let currentSecondNum = 0;

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
  currentFirstNum = parseInt(
    currentOperatorWrapper.previousElementSibling.value
  );
  currentSecondNum = parseInt(currentOperatorWrapper.nextElementSibling.value);

  // isNum();
  getResult(currentOperator, currentKeyClass);
}

function findKeyClass(e) {
  const currentBtnClassList = e.target.classList;

  currentKeyClass = currentBtnClassList[currentBtnClassList.length - 1];
  setEquation(currentKeyClass);
}

// function isNum(/* object */) {
//   if (/* !currentFirstNum && !currentSecondNum */ ){
//     object.errorMessage.textContent ="Please enter the empty value";
//   }
// }

function init() {
  btn.forEach((button) =>
    button.addEventListener("click", findKeyClass, false)
  );
}

init();
