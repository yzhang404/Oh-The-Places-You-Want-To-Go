
class App{
    constructor(selectors){
        this.countries=[]
        console.log(countries)
        this.max=0
        this.list=document.querySelector(selectors.listSelector)
        this.template = document.querySelector(selectors.templateSelector)
        document
        .querySelector(selectors.formSelector)
        .addEventListener('submit', (ev)=>{
            
            ev.preventDefault()
            this.handleSubmit(ev)
        })
    }
    renderList(countrycollect){
        const item = this.template.cloneNode(true)
        item.classList.remove('template')
        item.dataset.id = countrycollect.id
        console.log(item.dataset.id)
        item.querySelector('.flickName').textContent = countrycollect.countryName

        item
        .querySelector('a#deleteB')
        .addEventListener('click', this.removeItem.bind(this, countrycollect)
      )
        item
        .querySelector('a#fav')
        .addEventListener('click', this.favItem.bind(this, countrycollect))

        item
        .querySelector('a#up')
        .addEventListener('click',this.upItem.bind(this,countrycollect))

        item
        .querySelector('a#down')
        .addEventListener('click',this.downItem.bind(this,countrycollect))

        item
        .querySelector('a#edit') // look into bind functions!!!
        .addEventListener('click',this.editContent.bind(this,countrycollect,item))
        return item
    }
    handleSubmit(ev){
        const f = ev.target
        const countrycollect = {
            id: ++this.max,
            countryName: f.country.value,
            fav: false,
        }
        this.countries.unshift(countrycollect.countryName)
        const item = this.renderList(countrycollect)
        this.list.insertBefore(item,this.list.firstChild)
        f.reset()
    }
    
    removeItem(countrycollect,ev){ // event has to go last
        const btn = ev.target
        const it = btn.closest('.flick')

        it.remove()
        const index1 = this.countries.indexOf(countrycollect)
        this.countries.splice(index1, 1)

    }
    favItem(countrycollect,ev){
        const favbtn = ev.target
        const li = favbtn.closest('.flick')
        if (favbtn.textContent=='Fav'){
            li.style.background = 'yellow'
            favbtn.textContent = 'Unfav'
            countrycollect.fav = true
        } else{
            li.style.background = 'teal'
            favbtn.textContent = 'Fav'
            countrycollect.fav = false
        }
        console.log(countrycollect.fav)
        
    }
    upItem(countrycollect,ev){
        const currentItem = document.querySelector(`[data-id = "${countrycollect.id}"]`)
        const valueItem = currentItem.querySelector('.flickName').textContent
        const index2 = this.countries.indexOf(valueItem)
        if (index2 > 0 ){
            this.list.insertBefore(currentItem,currentItem.previousElementSibling)
            const temp = this.countries[index2-1]
            this.countries[index2-1] = this.countries[index2]
            this.countries[index2] = temp
        } else{
            alert('It is the top one already!!!!!!!!')
        }
    }
    downItem(countrycollect,ev){
        const currentItem1 = document.querySelector(`[data-id = "${countrycollect.id}"]`)
        const valueItem1 = currentItem1.querySelector('.flickName').textContent
        const index3 = this.countries.indexOf(valueItem1)
        if (index3 < this.countries.length-1 ){
            this.list.insertBefore(currentItem1.nextElementSibling,currentItem1)
            const temp = this.countries[index3+1]
            this.countries[index3+1] = this.countries[index3]
            this.countries[index3] = temp
        } else{
            alert('It is the bottom one already!!!!!!!!')
        }
    }
    editContent(countrycollect,item,ev){
        const name = item.querySelector('.flickName')
        const button = item.querySelector('a#edit')
        if(!name.isContentEditable){
            name.contentEditable = true
            countrycollect.countryName = name.textContent
        } else{
            name.contentEditable = false
        }


    }

}
const app = new App({
    formSelector: '#form',
    listSelector: '#countries',
    templateSelector:'.template',
})