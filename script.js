let menuBurger = document.getElementById('menuBurger')
let closeButton = document.getElementById('close')
let concept = document.getElementById('linkConcept')
let deployedMenu = document.getElementById('deployedMenu')
let contactForm = document.getElementById('contactForm')
let bookButton = document.getElementById('bookButton')
let cancel = document.getElementById('cancel')
let submitForm = document.getElementById('submit')


menuBurger.addEventListener('click', ()=>{
    deployedMenu.style.animation = "openMenu 0.5s"
    deployedMenu.style.marginLeft = "40vw"
})

closeButton.addEventListener('click', ()=>{
    deployedMenu.style.animation = "closeMenu 0.5s"
    deployedMenu.style.marginLeft = "100vw"

})

concept.addEventListener('click', ()=>{
    deployedMenu.style.animation = "closeMenu 0.5s"
    deployedMenu.style.marginLeft = "100vw"
})

bookButton.addEventListener('click', ()=>{
    contactForm.style.animation = "openForm 0.5s"
    contactForm.style.marginTop = "0vh"

})

cancel.addEventListener('click', (event)=>{
    event.preventDefault()
    contactForm.style.animation = "closeForm 0.5s"
    contactForm.style.marginTop = "100vh"
})

submitForm.addEventListener('click', (event)=>{
    event.preventDefault()
    contactForm.style.animation = "closeForm 0s"
    contactForm.style.marginTop = "100vh"
})