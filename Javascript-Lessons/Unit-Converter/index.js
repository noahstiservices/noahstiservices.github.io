/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pounds
*/


const covertBtn = document.getElementById("convert-btn");
let metersConv = document.getElementById("meters-conv");
let feetConv = document.getElementById("feet-conv");
let literConv = document.getElementById("liter-conv");
let gallonConv = document.getElementById("gallon-conv");
let kilogramConv = document.getElementById("kilograms-conv");
let poundsConv = document.getElementById("pounds-conv");
let inputNumber = document.getElementById("input-number");
meters = inputNumber * 3.281;
length = inputNumber * .3048;

covertBtn.addEventListener("click", function () {
  inputValue = inputNumber.value;

  meters = inputValue * 3.281;
  length = inputValue * .3048;

  metersConv.textContent = `${inputValue} meters = ${Number(meters).toFixed(3)} feet`;

  feetConv.textContent = `${inputValue} feet = ${Number(length).toFixed(3)} meters`;

  liter = inputValue * 0.264;
  gallon = inputValue * 3.785;

  literConv.textContent = `
    ${inputValue} liters = ${Number(liter).toFixed(3)} gallons`;

  gallonConv.textContent = `
    ${inputValue} gallons = ${Number(gallon).toFixed(3)} liters`;

  kilogram = inputValue * 2.204;
  pounds = inputValue * 0.453;

  kilogramConv.textContent = `
    ${inputValue} kilograms = ${Number(kilogram).toFixed(3)} pounds`;

  poundsConv.textContent = `
    ${inputValue} pounds = ${Number(pounds).toFixed(3)} kilograms`;
})

