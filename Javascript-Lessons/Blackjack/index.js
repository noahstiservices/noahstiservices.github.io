let firstCard = 11
let secondCard = 10
let thirdCard = 5
let cards = [firstCard, secondCard] //array- ordered lists of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
console.log(messageEl)

let sumEl = document.querySelector("#sum-el")
console.log(sumEl)

let cardsEl = document.querySelector("#cards-el")
console.log(cardsEl)

function startGame() {
  renderGame()
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
  messageEl.textContent = message
  sumEl.textContent = "Sum: " + sum
}

function newCard() {
  console.log("Drawing a new card from the deck!")
  sum = firstCard + secondCard + thirdCard
  renderGame()
}