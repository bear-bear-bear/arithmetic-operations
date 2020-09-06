// html 상에서 같은 계산기 박스 부모를 가지는 연산기호, 화살표버튼, 결과값에 공통된 클래스_KeyClass 를 부여함
//  (ex- 더하기 박스 안에선 공통 클래스 js-add 부여)
// 클릭 이벤트에 반응하는 화살표 버튼의 KeyClass 를 바탕으로 올바른 계산식의 결과를 정확한 위치에 출력

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
  currentKeyClass = currentBtnClassList[currentBtnClassList.length - 1]; // 클릭된 버튼의 클래스 배열중에 마지막 요소가 연산자를 나타내는 클래스
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
