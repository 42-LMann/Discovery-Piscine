const hamburger = document.querySelector('.header_menu .nav_bar .nav_list .hamburger');
const mobile_menu = document.querySelector('.header_menu .nav_bar .nav_list ul');
const header_menu = document.querySelector('.header_menu .containter');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});