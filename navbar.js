document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.menubar-column');
    const menuBar = document.querySelector('.menu-bar');

    burger.addEventListener('click', () => {
        menuBar.classList.toggle('active'); // เปิดหรือปิดเมนู
    });
});