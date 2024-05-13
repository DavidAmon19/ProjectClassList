const button = document.getElementById('conteudobotao');
const conteudo = document.getElementById('conteudo');

button.addEventListener('click', function () {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        conteudo.classList.remove('text-white');
        button.textContent = 'Tema Escuro';
    } else {
        document.body.classList.add('dark-theme');
        conteudo.classList.add('text-white');
        button.textContent = 'Tema Claro';
    }
});
