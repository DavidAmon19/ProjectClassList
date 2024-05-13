document.addEventListener('DOMContentLoaded', function () {
    const addCardButton = document.getElementById('addCardButton');

    addCardButton.addEventListener('click', function () {
        const container = document.body; // Pode ser qualquer elemento onde você quer adicionar os cards

        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '200px';
        card.style.height = '200px';
        card.style.border = '2px solid blue'; // Bordas azuis

        container.appendChild(card);
    });
});
