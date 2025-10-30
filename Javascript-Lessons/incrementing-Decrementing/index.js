let myPoints = 3

function add3Points() {
  myPoints += 3
}

function remove1Point() {
  myPoints -= 1
}
add3Points()
add3Points()
remove1Point()
add3Points()
remove1Point()

console.log(myPoints)