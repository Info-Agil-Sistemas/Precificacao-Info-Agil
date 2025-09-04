// // ===== INDEX.JS - ARQUIVO PRINCIPAL =====
// // Este arquivo coordena todos os módulos da aplicação

// // Inicialização da aplicação
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('🚀 InfoÁgil SaaS Calculator v3 - Inicializando...');
    
//     // Inicializar eventos do modal
//     initModalEvents();
    
//     // Aplicar valores padrão
//     resetarPadrao();
    
//     // Adicionar event listeners para validação automática
//     const distributionInputs = ['distribMei', 'distribContador', 'distribBasico', 'distribInter', 'distribPremium'];
//     distributionInputs.forEach(id => {
//         const input = document.getElementById(id);
//         if (input) {
//             input.addEventListener('input', validarDistribuicao);
//             input.addEventListener('change', calcular);
//         }
//     });
    
//     // Event listeners para inputs principais
//     const mainInputs = document.querySelectorAll('input[type="number"]');
//     mainInputs.forEach(input => {
//         input.addEventListener('change', calcular);
//     });
    
//     // Event listener para tipo de operação
//     const tipoOperacao = document.getElementById('tipoOperacao');
//     if (tipoOperacao) {
//         tipoOperacao.addEventListener('change', calcular);
//     }
    
//     console.log('✅ Aplicação inicializada com sucesso!');
// });

// // Expor funções globais necessárias
// window.calcular = calcular;
// window.resetarPadrao = resetarPadrao;
// window.validarDistribuicao = validarDistribuicao;
// window.autoCorrigirDistribuicao = autoCorrigirDistribuicao;
// window.adicionarItem = adicionarItem;
// window.removerItem = removerItem;
// window.exportarJSON = exportarJSON;
// window.testeRapido = testeRapido;
// window.debugCompleto = debugCompleto;
// window.abrirTreinamento = abrirTreinamento;
// window.fecharTreinamento = fecharTreinamento;
// window.gerarRelatorioCompleto = gerarRelatorioCompleto;
// window.inicializarModalTreinamento = inicializarModalTreinamento;
