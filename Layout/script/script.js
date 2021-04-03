const btnMenu = document.querySelector('.menuIcon');
const dropdownMenu = document.querySelector('.menu');

btnMenu.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open')
});

const btnInstitucional = document.querySelector('.institucional');
const dropdownInstitucional = document.querySelector('.institucional__option');
const arrowRotate = document.querySelector('.arrow');


btnInstitucional.addEventListener('click', () => {
  dropdownInstitucional.classList.toggle('open')
  arrowRotate.classList.toggle('down')
});