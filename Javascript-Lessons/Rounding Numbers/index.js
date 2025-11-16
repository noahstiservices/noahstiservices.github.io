const totalPrice = "420.69235632455"
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy ${Number(totalPrice).toFixed(2)}`

// this will work however still use the way shown above
// btn.textContent = `Buy ${Math.round(totalPrice * 100.0) / 100.0}`