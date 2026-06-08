// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona o botão pelo ID
    const botaoAcao = document.getElementById('btn-acao');

    // Adiciona um evento de clique ao botão
    botaoAcao.addEventListener('click', () => {
        alert('Olá! Obrigado por apoiar a sustentabilidade no Projeto Agrinho. Desenvolvido por Felipe!');
    });

});
