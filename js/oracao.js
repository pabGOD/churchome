document.addEventListener('DOMContentLoaded', function() {
    const oracaoForm = document.getElementById('oracao-form');
    const pedidosList = document.getElementById('pedidos');

    oracaoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const pedido = document.getElementById('pedido').value;

        // Criar um elemento de lista para o pedido
        const listItem = document.createElement('li');
        listItem.textContent = `${nome}: ${pedido}`;

        // Adicionar o item à lista
        pedidosList.appendChild(listItem);

        // Limpar o formulário
        document.getElementById('nome').value = '';
        document.getElementById('pedido').value = '';
    });
});
