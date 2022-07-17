import Bio from './modules/bio/Bio.js'
import Gallery from './modules/gallery/Gallery.js'
import Nav from './modules/nav/Nav.js'
import { request , addEntryToDb} from './database.js'


const App = () =>{
    return (`
    ${Nav()}
    <div class="container">
        ${Bio()}
        ${Gallery()}
    <div/>
    `
    )
}

document.getElementById('root').innerHTML = App()

request.onsuccess = () =>{
    addEntryToDb('bio', {name: 'lota', description: `Hey, I'm lota!`})
}

const editBioForm = document.querySelector('.edit-bio-form')
    

    editBioForm.addEventListener('submit', ()=>{
        event.preventDefault()
        const nameInput = document.querySelector('#name').value
        const nameOutput = document.querySelector('.name')
        nameOutput.innerText = nameInput
    })

