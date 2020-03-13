// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const headerDiv = crEl('div', 'header')
  const span = crEl('span', 'date', 'MARCH 28, 2019')
  const h1 = crEl('h1','',"Lambda Times")
  const span2 = crEl('span','temp','98°')


  headerDiv.appendChild(span)
  headerDiv.appendChild(h1)
  headerDiv.appendChild(span2)
  return headerDiv
}

document.querySelector('.header-container').appendChild(Header())

let test = Header()
console.log(test)

function crEl (tag, cl="", txt=""){
  el = document.createElement(tag) 
  if (cl !=""){el.classList.add(cl)}
  el.textContent = txt
  return el
}