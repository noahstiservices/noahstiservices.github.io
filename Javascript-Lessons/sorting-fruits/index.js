let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function shelf() {
  for (let apple = 0; apple < fruit.length; apple++) {
    if (fruit[apple] === "🍎") {
      appleShelf.textContent += "🍎"
    } else if (fruit[apple] === "🍊") {
      orangeShelf.textContent += "🍊"
    }
  }
}

shelf()