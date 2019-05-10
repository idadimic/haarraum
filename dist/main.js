/*const burger = document.querySelector('.reveal')
const revealMenu = document.querySelector('.menu-full')
const menuNav = document.querySelectorAll('.menu-full nav a')

burger.addEventListener('click', event => {
    revealMenu.classList.add('visible')
})

menuNav.forEach(element => {
    element.addEventListener('click', event => {
        revealMenu.classList.remove('visible')
    })
})*/

$('.reveal').on('click', function() {
  
    $('.menu-full').toggleClass('visible')
    
    return false
    
})

$('.menu-full nav a').on('click', function() {
  
    $('.menu-full').toggleClass('visible')
    
    return false
    
})