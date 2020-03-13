// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// console.log(axios.get("https://lambda-times-backend.herokuapp.com/topics"))

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        console.log("I'm happy")
        // console.log("trending topics")
        // console.log(response)
        const itemOfInterest = response.data.topics

        
        for (const prop in itemOfInterest) {
            // console.log(`object name: ${prop} and value: ${itemOfInterest[prop]}`)
            // console.log(itemOfInterest[prop])
            document.querySelector('.topics').appendChild(createDiv(itemOfInterest[prop]))
        }
    })



function createDiv(object) {

    // object.forEach(el => {
    //     console.log(el)
    //     return crEl('div', 'tab', el)
    // })

    // for (const prop in object) {
    //     console.log(`object${prop} and ${object[prop]}`)

    // }

    // component = crEl('div', 'tab', object)

    return crEl('div', 'tab', object)
}



function crEl(tag, cl = "", txt = "") {
    el = document.createElement(tag)
    if (cl != "") { el.classList.add(cl) }
    el.textContent = txt
    return el
}