//If possible, use const. If not, use let.

const basePrice = 520
const discount = 120
let shippingCost = 12
let ShippingTime = "5-12 days"

shippingCost = 15
ShippingTime = "7-14 days"
const fullPrice = basePrice - discount + shippingCost

console.log("Total cost: " + fullPrice + ". It will arrive in " + ShippingTime)