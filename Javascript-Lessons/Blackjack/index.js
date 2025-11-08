let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard] //array- ordered lists of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")

let sumEl = document.querySelector("#sum-el")

let cardsEl = document.querySelector("#cards-el")
console.log(cards)

let player = {
  name: "Noah",
  chips: 145,
  sayHello: function () {
    console.log("Hello")
  }
}

player.sayHello()

let playerName = "Noah"
let playerChips = 145

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomCardNumber = Math.floor(Math.random() * 13) + 1
  if (randomCardNumber > 10) {
    return 10
  } else if (randomCardNumber === 1) {
    return 11
  } else {
    return randomCardNumber
  }

}

function startGame() {
  renderGame()
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
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
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  messageEl.textContent = message
  sumEl.textContent = "Sum: " + sum
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