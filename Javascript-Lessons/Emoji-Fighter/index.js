let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭",
  "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")


fightButton.addEventListener("click", function () {
  let i = Math.floor(Math.random() * fighters.length)
  let e = Math.floor(Math.random() * fighters.length)
  let randomF = fighters[e] + " VS " + fighters[i]
  stageEl.textContent = randomF
  console.log(randomF)
})
