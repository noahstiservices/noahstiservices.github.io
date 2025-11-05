let score = document.getElementById("score")
let result = 0

function addH() {
  result += 1
  score.textContent = result
}

function addH2() {
  result += 2
  score.textContent = result
}

function addH3() {
  result += 3
  score.textContent = result
}

function minusH() {
  result -= 1
  score.textContent = result
}

function reset() {
  result = 0
  result1 = 0
  score1.textContent = result1
  score.textContent = result
}

let score1 = document.getElementById("score1")
let result1 = 0

function addA() {
  result1 += 1
  score1.textContent = result1
}

function addA2() {
  result1 += 2
  score1.textContent = result1
}

function addA3() {
  result1 += 3
  score1.textContent = result1
}

function minusA() {
  result1 -= 1
  score1.textContent = result1
}
