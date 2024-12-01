const menuToggle = document.querySelector('.menu-tiggle input');
const nav = document.querySelector('nav ul')

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});
