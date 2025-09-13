document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');
    const loginSection = document.getElementById('login-section');
    const oracaoSection = document.getElementById('oracao-section');
    const cultosSection = document.getElementById('cultos-section');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // **IMPORTANT:**  Substitua esta lógica por uma verificação de usuário/senha REAL
        //               em um backend (servidor) seguro.  NÃO armazene senhas diretamente no cliente!
        if (username === 'admin' && password === 'senha') {
            loginMessage.textContent = 'Login bem-sucedido!';
            loginSection.style.display = 'none'; // Hide login form
            oracaoSection.style.display = 'block'; // Show oracao section
            cultosSection.style.display = 'block'; // Show cultos section

        } else {
            loginMessage.textContent = 'Usuário ou senha incorretos.';
        }
    });
});
