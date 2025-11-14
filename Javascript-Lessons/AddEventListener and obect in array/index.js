let data = [
  {
    player: "Jane",
    score: 52
  },
  {
    player: "Mark",
    score: 41
  }
]

const gameBtn = document.getElementById("game-btn")
let gamer = gameBtn
gameBtn.addEventListener("click", function () {
  console.log(data[0].score)
})
