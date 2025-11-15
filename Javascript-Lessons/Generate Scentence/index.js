function generateSentence(desc, arr) {
  combinedString = `The ${arr.length} ${desc} are `
  //we made lastIndex, so the last word or number in the array doesnt get a coma or anything after it to make it more presentable.
  const lastIndex = arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    if (i === lastIndex) {
      // remember that arr[i] is saying we only want the array and we already are calling for the length in the for loop above, so we dont need to do it again.
      combinedString += arr[i]
    } else {
      combinedString += arr[i] + ", "
    }
  }
  return combinedString
}

const bigSentence = generateSentence("Best Food Places", ["Pizza Joes", "Applebees", "Wendys"])

console.log(bigSentence)

