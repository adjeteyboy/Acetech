var hamburger = document.querySelector('.hamburger')
var mobileMenu = document.querySelector('#mobile-menu')

hamburger.addEventListener('click', function() {
  mobileMenu.classList.toggle('mobile-menu--is-open')
})