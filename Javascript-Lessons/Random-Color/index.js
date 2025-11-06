let colorRan = document.getElementById("colorRan")
let colorButton = document.querySelector("button")
console.log(colorButton)
let bodyColor = document.querySelector("body")

function color() {
  randomColor = randomColor
  colorRan.textContent = randomColor
  console.log("button clicked")
}

let rgb = 255

colorButton.addEventListener("click", function () {
  let red = Math.round(Math.random() * rgb)
  let green = Math.round(Math.random() * rgb)
  let blue = Math.round(Math.random() * rgb)
  bodyColor.style.backgroundColor = "rgb(" + red + "," + blue + "," + green + ")"
  console.log(red, blue, green)
})



//Create a random number between 0 - 255 then you need to do that for
// all three channels red, green, blue then insert those into that string
// somehow 
