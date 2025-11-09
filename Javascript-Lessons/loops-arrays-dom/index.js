let scentence = ["Hello", "my", "name", "is", "Noah"]
let greetingEl = document.getElementById("greeting-el")

for (let c = 0; c < scentence.length; c++) {
  greetingEl.textContent += scentence[c] + " "
}