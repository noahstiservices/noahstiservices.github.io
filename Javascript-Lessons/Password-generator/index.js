const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
  "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#',
  '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']',
  '{', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?', ' '
]

let passwordEl = document.querySelector("#password")
let passwordE2 = document.querySelector("#password1")
let passwordLength = 15

function generate() {
  let randomCharacter = ""
  for (let i = 0; i < passwordLength; i++) {
    let c = Math.floor(Math.random() * characters.length);
    randomCharacter += characters[c]
    passwordEl.textContent = randomCharacter
    console.log(randomCharacter)

    let randomCharacter1 = ""
    for (let i = 0; i < passwordLength; i++) {
      let c1 = Math.floor(Math.random() * characters.length);
      randomCharacter1 += characters[c1]
      passwordE2.textContent = randomCharacter1
      console.log(randomCharacter1)
    }
  }
}