const menuTonggle = document.querySelector('.menu-tonggle input');
const nav = document.querySelector('nav ul')

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});
