
const inputBtn = document.getElementById("input-btn")
let myLeads = []

// This is a object
// let myLeads = `["google.com"]`
// myLeads = JSON.parse(myLeads)
// console.log(typeof myLeads)

//This is a string
// let myLeads = `["google.com"]`
// myLeads = JSON.stringify = (myLeads)
// console.log(typeof myLeads)

const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads()
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  console.log(localStorage.getItem("myLeads"))
  renderLeads()
})

function renderLeads() {
  let listItems = ""
  for (i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
      <a href= '"${myLeads[i]} + "' target=_blank>${myLeads[i]}</a>
    </li >
    `
  }
  ulEl.innerHTML = listItems
}

//This method is more effecient however does not save after browser refresh but
//can be used with something in order to keep saved items

// function renderLead() {
//   let listItem = "<li>" + inputEl.value + "</li>"
//   ulEl.innerHTML += listItem
// }

//This is how to include the top to the function below and make it work correctly

// inputBtn.addEventListener("click", function () {
//   myLeads.push(inputEl.value)
//   renderLead()
//   inputEl.value = ""
// })
