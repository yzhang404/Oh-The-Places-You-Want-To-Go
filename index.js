
const app={
    init(selectors){
        this.countries=[]
        this.max=0
        this.list=document.querySelector(selectors.listSelector)
        this.template = document.querySelector(selectors.templateSelector)
        document
        .querySelector(selectors.formSelector)
        .addEventListener('submit', (ev)=>{
            
            ev.preventDefault()
            this.handleSubmit(ev)
        })
    },
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
        .addEventListener('click',this.upItem.bind(this,countrycollect,item.dataset.id))
        return item
    },
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
    },
    
    removeItem(countrycollect,ev){
        const btn = ev.target
        const it = btn.closest('.flick')

        it.remove()
        const index = this.countries.indexOf(countrycollect)
        this.countries.splice(index, 1)

    },
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
        
    },
    upItem(){

    },
    downItem(){

    },

}
app.init({
    formSelector: '#form',
    listSelector: '#countries',
    templateSelector:'.template',
})