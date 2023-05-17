const headerMenu = document.querySelector('.header__menu');
const navbar = document.querySelector('.nav');
const navCloseIcon = document.querySelector('.nav__close');

headerMenu.addEventListener('click', () => {
  console.log('menu was clicked!');

  // navbar.style.transform = 'translateX(0px)'

  navbar.classList.add('move__right');
  navbar.classList.remove('move__left');
})

navCloseIcon.addEventListener('click', () => {
  // navbar.style.transform = 'translateX(-300px)'
  
  navbar.classList.add('move__left');
  navbar.classList.remove('move__right');

})