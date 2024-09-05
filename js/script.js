document.addEventListener('DOMContentLoaded', function() {
  const menuHamburguer = document.querySelector('.menu-hamburguer');
  const nav = document.querySelector('header nav');

  menuHamburguer.addEventListener('click', function() {
    menuHamburguer.classList.toggle('aberto');
    nav.classList.toggle('aberto');
  });
});
