let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

// Abre o menu ao clicar no botão
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.style.display = 'block'; // Exibe a sobreposição
});

// Fecha o menu ao clicar na área do menu ou na sobreposição
menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none'; // Oculta a sobreposição
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none'; // Oculta a sobreposição
});
