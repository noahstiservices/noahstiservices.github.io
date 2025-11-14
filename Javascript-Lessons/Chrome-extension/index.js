
const inputBtn = document.getElementById("input-btn")
let myLeads = []

// This is a object
// let myLeads = `["google.com"]`
// myLeads = JSON.parse(myLeads)
// console.log(typeof myLeads)

//This is a string
// let myLeads = ["google.com"]
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url)
    tabs.value = []
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
})

function render(leads) {
  let listItems = ""
  for (i = 0; i < leads.length; i++) {
    listItems += `
    <li>
      <a href= '"${leads[i]} + "' target=_blank>${leads[i]}</a>
    </li >
    `
  }
  ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
})

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
