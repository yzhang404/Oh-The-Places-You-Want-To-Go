const form = document.querySelector('form')

function handleSubmit(ev){
    ev.preventDefault();
    const collectCountry = []
    const template = document.querySelector('.template')
    const a = ev.target
    const country = a.country.value
    collectCountry.push(country)
    const collects = {
        'country': country,
    }
    document.querySelector('#countries').appendChild(renderList(collects,collectCountry,template))
    a.reset()
    a.country.focus()
}
function renderList(data,country,template){
    const item =  template.cloneNode(true)
    item.classList.remove('template')
    item.querySelector('.flickName').textContent = data['country']
    console.log(item)
    return item
}
    //const button = document.createElement('button')
    //buttonStyle(button)
    //item.appendChild(button)
    //list.appendChild(item)
    /*
    const button = document.querySelector('.button.alert')
    button.addEventListener('click', collections =>{
    list.removeChild(item)
    country.splice(country.indexOf(data[keys[0]]),1)
    continent.splice(continent.indexOf(data[keys[1]]),1)
})
    list.insertBefore(item,list.firstChild)
    return list
}

/*
function buttonStyle(button){
    button.textContent = 'Delete'
    button.style.width = '3rem'
    button.style.height = '2rem'
    button.style.float = 'right'
    button.setAttribute('class','deleteButton')
}
*/
form.addEventListener('submit',handleSubmit)
