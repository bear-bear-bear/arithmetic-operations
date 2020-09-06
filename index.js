// html �󿡼� ���� ���� �ڽ� �θ� ������ �����ȣ, ȭ��ǥ��ư, ������� ����� Ŭ����_KeyClass �� �ο���
//  (ex- ���ϱ� �ڽ� �ȿ��� ���� Ŭ���� js-add �ο�)
// Ŭ�� �̺�Ʈ�� �����ϴ� ȭ��ǥ ��ư�� KeyClass �� �������� �ùٸ� ������ ����� ��Ȯ�� ��ġ�� ���

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
    symbol: "��",
    calculus: function () {
      return firstNum / secondNum;
    },
  },
};
const operators = Object.keys(calculate);
let firstNum = 0;
let secondNum = 0;
let currentOperator = "";

function getResult(currentOperator) {
  operators.forEach((operator) => {
    if (calculate[operator]["symbol"] === currentOperator) {
      console.log(calculate[operator].calculus());
      console.log(`'${calculate[operator]["symbol"]}'`);
    }
  });
  // console.log(calculate[operator]["symbol"];
}

function setEquation(currentKeyClass) {
  let currentOperatorWrapper = document.getElementsByClassName(
    currentKeyClass
  )[0];

  currentOperator = currentOperatorWrapper.textContent;
  firstNum = currentOperatorWrapper.previousElementSibling.value;
  secondNum = currentOperatorWrapper.nextElementSibling.value;

  getResult(currentOperator);

  console.log(`currentOperator = '${currentOperator}'`);
  console.log(`firstNum = '${firstNum}', secondNum = '${secondNum}'`);
}

function findKeyClass(e) {
  const currentBtnClassList = e.target.classList;

  currentKeyClass = currentBtnClassList[currentBtnClassList.length - 1]; // Ŭ���� ��ư�� Ŭ���� �迭�߿� ������ ��Ұ� �����ڸ� ��Ÿ���� Ŭ����
  setEquation(currentKeyClass);

  console.log(`currenKeyClass = '${currentKeyClass}'`);
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
