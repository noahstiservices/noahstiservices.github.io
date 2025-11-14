//booleans

let isVegan = true
console.log(isVegan)

let hasDiscountCode = true

function processOrder() {
  if (hasDiscountCode) {
    console.log("Discount applied to food order")
    hasDiscountCode = false
  } else {
    console.log("No discount applied")
  }
}

processOrder()
processOrder()

let isDog = true
let isCat = false

function processAnimal() {
  if (isCat) {
    console.log("I am a cat")
    isCat = false
  } else {
    console.log("I'm a dog")
  }
}

processAnimal()


let hasGloves = false
let hasJacket = true
let hasHat = true

function clothes() {
  if (hasGloves) {
    console.log("I have my gloves")
    hasGloves = false
  } else if (hasHat) {
    console.log("I have a hat")
  }
  else {
    console.log("I don't have my gloves but I have my jacket")
  }
}
clothes()