let hands = ["rock", "paper", "scissor"]

function game() {
  let randomizer = Math.floor(Math.random() * 3)
  return hands[randomizer]
}

console.log(game())