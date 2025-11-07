let messageEl = document.getElementById("message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")
let isAlive = false
let hasBlackJack = false
let sum = 0
let cards = [firstCard, secondCard]
let message = ""
let firstCard = getRandomCard()
let secondCard = getRandomCard()
console.log(cards)

function startGame() {
  renderGame()
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function getRandomCard() {
  let randomCardNumber = Math.round(Math.random() * 13) + 1
  if (randomCardNumber > 10) {
    return 10
  } else if (randomCardNumber === 1) {
    return 11
  } else {
    return randomCardNumber
  }
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
  messageEl.textContent = message
  sumEl.textContent = "sum: " + sum
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  } else if (sum <= 20) {
    message = "Do you want to draw a new card?"
  }
}
