document.addEventListener('DOMContentLoaded', function() {
    const novoCultoButton = document.getElementById('novo-culto');
    const cultoForm = document.getElementById('culto-form');
    const criarCultoForm = document.getElementById('criar-culto-form');
    const cultosList = document.getElementById('cultos');

    novoCultoButton.addEventListener('click', function() {
        cultoForm.style.display = 'block';
    });

    criarCultoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const data = document.getElementById('data').value;
        const horario = document.getElementById('horario').value;
        const pregador = document.getElementById('pregador').value;

        const listItem = document.createElement('li');
        listItem.textContent = `Data: ${data}, Horário: ${horario}, Pregador: ${pregador}`;

        cultosList.appendChild(listItem);

        cultoForm.style.display = 'none'; // Esconde o formulário após salvar

        //Limpa os campos do formulário
        document.getElementById('data').value = '';
        document.getElementById('horario').value = '';
        document.getElementById('pregador').value = '';
    });
});
