const imags = [
  "images/dog1.jpg",
  "images/dog2.jpg",
  "images/dog3.jpg"
]

const par = "Hey we won the dog show"

const container = document.getElementById("container")

function renderImage() {
  let imgsDom = ""
  for (let i = 0; i < imags.length; i++) {
    imgsDom += `<img alt="Dog in the show" class="image-area" src="${imags[i]}">`
  }
  container.innerHTML = imgsDom
}

renderImage()