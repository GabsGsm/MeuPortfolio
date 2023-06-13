const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const conteinerHamburger = document.querySelector('.conteiner-hamburger');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  hamburger.classList.toggle('active-hamburger');
});

menu.addEventListener('click', ()=>{
  menu.classList.toggle('active');
  hamburger.classList.toggle('active-hamburger');
});
