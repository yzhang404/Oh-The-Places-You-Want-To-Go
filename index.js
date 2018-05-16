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
    collections.appendChild(renderList(collects))

    a.reset()
    a.country.focus()
}
function renderList(data){
    const list = document.createElement('ul')
    const keys = Object.keys(data)
    const item = document.createElement('li')
    keys.forEach(label => {
        item.textContent += data[label]+' '
    })
    list.appendChild(item)
    return list
}



form.addEventListener('submit',handleSubmit)

