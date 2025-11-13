let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard + secondCard]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
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
