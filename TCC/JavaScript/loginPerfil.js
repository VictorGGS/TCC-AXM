
//LOGIN

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('con').addEventListener('click', function(event) {
        // Prevenir o envio do formulário
        event.preventDefault();

        // Obter valores dos campos
        const email = document.getElementById('email').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const nome = document.getElementById('nome').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const confirmSenha = document.getElementById('confirmSenha').value.trim();
        
        // Obter elementos de erro
        const emailError = document.getElementById('emailError');
        const cpfError = document.getElementById('cpfError');
        const nomeError = document.getElementById('nomeError');
        const senhaError = document.getElementById('senhaError');
        const confirmSenhaError = document.getElementById('confirmSenhaError');

        // Limpar mensagens de erro
        emailError.textContent = '';
        cpfError.textContent = '';
        nomeError.textContent = '';
        senhaError.textContent = '';
        confirmSenhaError.textContent = '';

        // Validação
        let isValid = true;

        if (!validateEmail(email)) {
            emailError.textContent = 'E-mail inválido.';
            isValid = false;
        }

        if (!validateCPF(cpf)) {
            cpfError.textContent = 'CPF inválido.';
            isValid = false;
        }

        if (nome === '') {
            nomeError.textContent = 'O nome é obrigatório.';
            isValid = false;
        }

        if (!validatePassword(senha)) {
            senhaError.textContent = 'A senha deve ter pelo menos 8 caracteres, incluir letras e números.';
            isValid = false;
        }

        if (senha !== confirmSenha) {
            confirmSenhaError.textContent = 'Senhas não conferem.';
            isValid = false;
        }

        // Se válido, redirecionar
        if (isValid) {
            window.location.href = 'paginaInicial.html';
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return re.test(password);
    }

    function validateCPF(cpf) {
        cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos

        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

        let sum = 0;
        let remainder;

        for (let i = 1; i <= 9; i++) {
            sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
        }

        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cpf.charAt(9))) return false;

        sum = 0;
        for (let i = 1; i <= 10; i++) {
            sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
        }

        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cpf.charAt(10))) return false;

        return true;
    }
});

//PERFIL

document.addEventListener('DOMContentLoaded', function() {
    const formularioPerfil = document.getElementById('formularioPerfil');
    if (formularioPerfil) {
        formularioPerfil.addEventListener('submit', function(event) {
            // Prevenir o envio do formulário
            event.preventDefault();

            // Obter valores dos campos
            const nome = document.getElementById('nome').value.trim();
            const senha = document.getElementById('senha').value.trim();
            const confirmSenha = document.getElementById('confirmSenha').value.trim();
            
            // Obter elementos de erro
            const nomeError = document.getElementById('nomeError');
            const senhaError = document.getElementById('senhaError');
            const confirmSenhaError = document.getElementById('confirmSenhaError');

            // Limpar mensagens de erro
            if (nomeError) nomeError.textContent = '';
            if (senhaError) senhaError.textContent = '';
            if (confirmSenhaError) confirmSenhaError.textContent = '';

            // Validação
            let isValid = true;

            if (nome === '') {
                if (nomeError) nomeError.textContent = 'O nome é obrigatório.';
                isValid = false;
            }

            if (!validatePassword(senha)) {
                if (senhaError) senhaError.textContent = 'A senha deve ter pelo menos 8 caracteres, incluir letras e números.';
                isValid = false;
            }

            if (senha !== confirmSenha) {
                if (confirmSenhaError) confirmSenhaError.textContent = 'Senhas não coincidem.';
                isValid = false;
            }

            // Se válido, redirecionar
            if (isValid) {
                window.location.href = 'paginaInicial.html';
            }
        });
    }

    function validatePassword(password) {
        // Valida se a senha tem pelo menos 8 caracteres, inclui pelo menos uma letra e um número
        const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return re.test(password);
    }
});
