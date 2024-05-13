document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    let menuCriado = false;
    let divVermelhaCriada = false;
  
    // Criar Menu Suspenso
    const criarMenuBtn = document.getElementById('criarMenu');
    criarMenuBtn.addEventListener('click', function () {
        if (!menuCriado) {
            const menu = document.createElement('div');
            menu.classList.add('menu');
            menu.innerHTML = `
                <a href="#">Opção 1</a>
                <a href="#">Opção 2</a>
                <a href="#">Opção 3</a>
            `;
            container.appendChild(menu);
            menuCriado = true;
            criarMenuBtn.textContent = 'Apagar Menu';
        } else {
            const menu = document.querySelector('.menu');
            menu.remove();
            menuCriado = false;
            criarMenuBtn.textContent = 'Criar Menu Suspenso';
        }
    });
  
    // Criar Div Vermelha
    const criarDivBtn = document.getElementById('criarDiv');
    criarDivBtn.addEventListener('click', function () {
        if (!divVermelhaCriada) {
            const divVermelha = document.createElement('div');
            divVermelha.classList.add('divVermelha');
            container.appendChild(divVermelha);
            divVermelhaCriada = true;
            criarDivBtn.textContent = 'Apagar Div Vermelha';
        } else {
            const divVermelha = document.querySelector('.divVermelha');
            divVermelha.remove();
            divVermelhaCriada = false;
            criarDivBtn.textContent = 'Criar Div Vermelha';
        }
    });
  
    // Mudar background
    const body = document.body;
    const toggleBackgroundBtn = document.createElement('button');
    toggleBackgroundBtn.textContent = 'Toggle Background';
    toggleBackgroundBtn.addEventListener('click', function () {
        body.classList.toggle('black-bg');
    });
    container.appendChild(toggleBackgroundBtn);
});
