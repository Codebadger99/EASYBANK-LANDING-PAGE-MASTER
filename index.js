const hamburger = document.querySelector('.hamburger > img')
const ul = document.querySelector('ul')

hamburger.addEventListener('click',() => {
    if(hamburger.src.endsWith('/images/icon-hamburger.svg')){
        hamburger.src = '/images/icon-close.svg'
        ul.classList.add('active')
    }else{
        hamburger.src = '/images/icon-hamburger.svg'
        ul.classList.remove('active')
    }
})



