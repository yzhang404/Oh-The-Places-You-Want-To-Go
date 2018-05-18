
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
        //item.dataset.id = countrycollect.id
        //const keys = countrycollect.keys()
        item.querySelector('.flickName').textContent = countrycollect.countryName
        return item
    },
    handleSubmit(ev){
        const f = ev.target
        const countrycollect = {
            id: ++this.max,
            countryName: f.country.value,
        }
        this.countries.unshift(countrycollect.countryName)
        const item = this.renderList(countrycollect)
        this.list.insertBefore(item,this.list.firstChild)
        f.reset()
    },
    
    removeItem(){
        const countrycollection = {
            countryName: document.querySelector('#form').country.value,
        }
        this.list.removeChild(this.renderList(countrycollection),1)
    },

}
app.init({
    formSelector: '#form',
    listSelector: '#countries',
    templateSelector:'.template',
})