/*
같은 계산기 박스 부모를 가지는 연산기호, 화살표버튼, 결과값, 에러메세지에 공통된 특정 클래스_KeyClass가 부여된 상태입니다.
(ex- 더하기 박스 안에선 공통 클래스 js-add 부여)
  _KeyClass.classList[0] >> 연산기호
  _KeyClass.classList[1] >> 화살표버튼
  _KeyClass.classList[2] >> 결과값
  _KeyClass.classList[3] >> 에러 메세지
클릭 이벤트에 반응하는 화살표 버튼의 KeyClass 를 바탕으로 올바른 계산식의 결과를 정확한 위치에 출력합니다.
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
