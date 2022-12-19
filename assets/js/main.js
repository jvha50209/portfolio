const hamburger = document.getElementById('hamburger-wrapper');
const closeMenu = document.getElementById('close-menu');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    if (!menu.classList.contains('visible')) {
        menu.classList.add('visible');
    }
});

closeMenu.addEventListener('click', () => {
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
    }
});