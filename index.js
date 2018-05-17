const form = document.querySelector('form')

function handleSubmit(ev){
    ev.preventDefault();
    const collectCountry = []
    const collectContinent = []
    const a = ev.target
    const country = a.country.value
    collectCountry.push(country)
    const continent = a.continent.value
    collectContinent.push(continent)
    const collects = {
        'country': country,
        'continent': continent,
    }
    const collections = document.querySelector('#collections')
    const list = document.createElement('ul')
    list.appendChild(renderList(collects,collections))
    collections.appendChild(list)
    a.reset()
    a.country.focus()
}
function renderList(data,collections){
    
    const keys = Object.keys(data)
    const item = document.createElement('li')
    keys.forEach(label => {
        item.textContent += data[label]+' '
    })
    const button = document.createElement('button')
    buttonStyle(button)
    item.appendChild(button)
  //  button.addEventListener('click',Delete(this,collections))
    return item
}
//function Delete(item,collections){
  //  collections.removeChild(item.innerHTML)
//}
function buttonStyle(button){
    button.textContent = 'Delete'
    button.style.color = 'teal'
}
form.addEventListener('submit',handleSubmit)

