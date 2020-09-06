// html 상에서 같은 계산기 박스 부모를 가지는 연산기호, 화살표버튼, 결과값에 공통된 클래스_KeyClass 를 부여함
//  (ex- 더하기 박스 안에선 공통 클래스 js-add 부여)
// 클릭 이벤트에 반응하는 화살표 버튼의 KeyClass 를 바탕으로 올바른 계산식의 결과를 정확한 위치에 출력

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
    symbol: "÷",
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

  currentKeyClass = currentBtnClassList[currentBtnClassList.length - 1]; // 클릭된 버튼의 클래스 배열중에 마지막 요소가 연산자를 나타내는 클래스
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
