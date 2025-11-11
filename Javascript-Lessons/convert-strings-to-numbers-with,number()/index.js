//reference to html elements

const form = document.getElementById("form")
const numOneInput = document.getElementById('num1')
const numTwoInput = document.getElementById('num2')
let resultText = document.querySelector("#result")
let btnAdd = document.getElementById("btn-add")
let btnMl = document.getElementById("btn-multiply")
let btnDv = document.getElementById("btn-divide")

// form event listener

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const numOneVal = Number(numOneInput.value);
  const numTwoVal = Number(numTwoInput.value);

  // even though we put numbers into the input fields, they become strings in javascript

  console.log(
    `numOneVal is of type: ${typeof numOneVal}, with a value of ${numOneVal}`);
  console.log(
    `numTwoVal is of type: ${typeof numTwoVal}, with a value of ${numTwoVal}`);
  // if we add 2 numbers together, they concatinate, which is not what we want. We need to convert them to numbers
})

function add() {
  const numOneVal = Number(numOneInput.value);
  const numTwoVal = Number(numTwoInput.value);

  resultText.innerText = `${numOneVal} + ${numTwoVal} = ${numOneVal + numTwoVal}`;
}

function subtract() {
  const numOneVal = Number(numOneInput.value);
  const numTwoVal = Number(numTwoInput.value);

  resultText.innerText = `${numOneVal} - ${numTwoVal} = ${numOneVal - numTwoVal}`;
}

function multiply() {
  const numOneVal = Number(numOneInput.value);
  const numTwoVal = Number(numTwoInput.value);

  resultText.innerText = `${numOneVal} * ${numTwoVal} = ${numOneVal * numTwoVal}`;
}

function divide() {
  const numOneVal = Number(numOneInput.value);
  const numTwoVal = Number(numTwoInput.value);

  resultText.innerText = `${numOneVal} / ${numTwoVal} = ${numOneVal / numTwoVal}`;
}

