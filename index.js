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
    collections.appendChild(renderList(collects,collectCountry,collectContinent))
    a.reset()
    a.country.focus()
}
function renderList(data,country,continent){
    const list = document.createElement('ul')
    const keys = Object.keys(data)
    const item = document.createElement('li')
    keys.forEach(label => {
        item.textContent += data[label]+' '
    })
    const button = document.createElement('button')
    buttonStyle(button)
    item.appendChild(button)
    list.appendChild(item)
    button.addEventListener('click', collections =>{
    list.removeChild(item)
    country.splice(country.indexOf(data[keys[0]]),1)
    continent.splice(continent.indexOf(data[keys[1]]),1)
})
    return list
}


function buttonStyle(button){
    button.textContent = 'Delete'
    button.style.color = 'teal'
    button.style.width = '3rem'
    button.style.height = '2rem'
}
form.addEventListener('submit',handleSubmit)

