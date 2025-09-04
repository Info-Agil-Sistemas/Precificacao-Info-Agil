// // ===== FUNÇÕES DE COLETA DE DADOS =====

// const getValue = (id) => parseFloat(document.getElementById(id)?.value) || 0;

// function getCustosBase() {
//   return {
//     mei: getValue('custoMei'), 
//     contador: getValue('custoContador'), 
//     basico: getValue('custoBasico'),
//     inter: getValue('custoInter'), 
//     premium: getValue('custoPremium')
//   };
// }

// function getSuporte() {
//   return {
//     mei: getValue('suporteMei'), 
//     contador: getValue('suporteContador'), 
//     basico: getValue('suporteBasico'),
//     inter: getValue('suporteInter'), 
//     premium: getValue('suportePremium')
//   };
// }

// function getCAC() {
//   return {
//     mei: getValue('cacMei'), 
//     contador: getValue('cacContador'), 
//     basico: getValue('cacBasico'),
//     inter: getValue('cacInter'), 
//     premium: getValue('cacPremium')
//   };
// }

// function getInputs(){
//   const custoFixo = {
//     pessoal: getValue('custosPessoal'), 
//     marketing: getValue('marketing'), 
//     infraestrutura: getValue('infraestrutura'),
//     contador: getValue('contador'), 
//     comunicacao: getValue('comunicacao'), 
//     outros: getValue('outros'),
//     setupAvante: getValue('setupAvante'), 
//     contingencia: getValue('custosContingencia')
//   };
  
//   const parametros = {
//     tipoOperacao: document.getElementById('tipoOperacao')?.value,
//     margemLucro: getValue('margemLucro') / 100,
//     metaClientes: getValue('metaClientes'),
//     distribuicao: {
//         mei: getValue('distribMei') / 100, 
//         contador: getValue('distribContador') / 100, 
//         basico: getValue('distribBasico') / 100,
//         inter: getValue('distribInter') / 100, 
//         premium: getValue('distribPremium') / 100
//     },
//     churnRate: getValue('churnRate') / 100,
//     churnMelhorado: getValue('churnMelhorado') / 100,
//     impostos: getValue('impostos') / 100,
//     comissoes: getValue('comissoes') / 100,
//     whiteLabelPct: getValue('whiteLabelPct') / 100,
//     sazonalidade: getValue('sazonalidade'),
//     margemAdicionais: getValue('margemAdicionais') / 100,
//     txAdesao: {
//         muito: getValue('txMuito') / 100, 
//         moderado: getValue('txMod') / 100, 
//         opcional: getValue('txOpc') / 100
//     }
//   };
  
//   return {custoFixo, parametros};
// }
