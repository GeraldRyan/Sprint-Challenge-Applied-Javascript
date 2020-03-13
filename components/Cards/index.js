// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log('article info:')
        console.log(response.data.articles)

        for (const prop in response.data.articles) {
            // console.log(prop)
            // console.log(response.data.articles[prop])

            for (const otherprop in response.data.articles[prop]) {
              console.log(response.data.articles[prop][otherprop])
              document.querySelector('.cards-container').appendChild(createCard(response.data.articles[prop][otherprop]))
            }
        }
        // for (const i = 0; i<response.data.articles.length;i++){
        //   console.log(i)
        //   console.log(response.data.articles)
        // }
    })

//Not working for some reason. Works on body but not on this element.
document.querySelectorAll(".card").addEventListener('click',()=>{
  alert("you clicked")

  // tabs.style.backgroundColor('green')
})





// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//

function createCard(obj) {
    const card = crEl('div', 'card')
    const headline = crEl('div', 'headline', obj.headline)
    const author = crEl('div', 'author')
    const imageContainer = crEl('div', 'img-container')
    const img = crEl("img")
    img.setAttribute('src', obj.authorPhoto)
    const span = crEl('span', '', `By ${obj.authorName}`)

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imageContainer)
    author.appendChild(span)
    imageContainer.appendChild(img)

    return card
}


function crEl(tag, cl = "", txt = "") {
    el = document.createElement(tag)
    if (cl != "") { el.classList.add(cl) }
    el.textContent = txt
    return el
}