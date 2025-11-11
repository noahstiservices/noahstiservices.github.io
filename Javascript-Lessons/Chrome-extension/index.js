
const inputBtn = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ""
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
