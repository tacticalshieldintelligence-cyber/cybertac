// Captura o formulário de login do HTML
const formLogin = document.getElementById('form-login');

if (formLogin) {
    formLogin.addEventListener('submit', function(event) {
        // Interrompe o recarregamento padrão da página
        event.preventDefault(); 

        // Captura o valor digitado no campo de senha
        const senhaDigitada = document.getElementById('senha-cliente').value;

        // Credencial de teste tático para a Alpha Corp.
        const senhaCorreta = "Alpha2026"; 

        if (senhaDigitada === senhaCorreta) {
            // Acesso Concedido: Redireciona para o Centro de Comando
            window.location.href = "dashboard.html";
        } else {
            // Acesso Negado: Alerta o usuário e limpa o campo
            alert("ACESSO NEGADO: Credencial inválida ou revogada.");
            document.getElementById('senha-cliente').value = "";
        }
    });
}