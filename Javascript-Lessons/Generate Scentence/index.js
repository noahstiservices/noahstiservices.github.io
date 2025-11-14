function generateSentence(desc, arr) {
  let comibinedString = `The ${arr.length} ${desc} are `
  for (let i = 0; i < arr.length; i++) {
    comibinedString += arr[i] + " "
  }
  return comibinedString
}

const sentence = generateSentence("rarest mushrooms", ["fungus ", "white"])

console.log(sentence)