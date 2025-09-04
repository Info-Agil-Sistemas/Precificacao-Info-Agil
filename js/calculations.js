// // ===== FUNÇÕES DE CÁLCULO =====

// function calcularPrecoPlano(plano, custoBase, suporte, custoFixoTotal, p, cac){
//   const custoFixoPorCliente = custoFixoTotal / Math.max(1, p.metaClientes);
//   const custoDireto = custoBase + suporte + custoFixoPorCliente;
  
//   let percSobrePreco = p.impostos + p.comissoes;
//   if (p.tipoOperacao === 'white_label' || p.tipoOperacao === 'hibrido') {
//       percSobrePreco += p.whiteLabelPct;
//   }

//   const denominador = (1 - p.margemLucro) * (1 - percSobrePreco);
//   const preco = custoDireto / Math.max(0.01, denominador);
  
//   const margem = preco - custoDireto - (preco * percSobrePreco);
//   const roi = custoDireto > 0 ? margem / custoDireto : 0;
  
//   const churnEfetivo = Math.max(0.001, (p.churnRate + p.churnMelhorado) / 2);
//   const ltv = (preco - (custoBase + suporte)) / churnEfetivo; // LTV sobre a margem de contribuição
//   const ltvCac = cac > 0 ? ltv / cac : 0;
  
//   return {
//     preco: Math.round(preco), 
//     custoDireto: Math.round(custoDireto), 
//     margem: Math.round(margem), 
//     roi: Math.round(roi * 100), 
//     ltv: Math.round(ltv), 
//     ltvCac: Math.round(ltvCac * 10) / 10, 
//     cac: cac
//   };
// }

// function calcularMetricas(resultados, parametros) {
//   const planos = ['mei', 'contador', 'basico', 'inter', 'premium'];
  
//   // Cálculo de métricas agregadas
//   let receitaTotal = 0;
//   let custosTotal = 0;
//   let clientesTotal = 0;
//   let cacPonderado = 0;
//   let ltvPonderado = 0;
  
//   planos.forEach(key => {
//     const clientesPlano = parametros.metaClientes * parametros.distribuicao[key];
//     const planoData = resultados.planos[key];
    
//     receitaTotal += clientesPlano * planoData.preco;
//     custosTotal += clientesPlano * planoData.custoDireto;
//     clientesTotal += clientesPlano;
//     cacPonderado += clientesPlano * planoData.cac;
//     ltvPonderado += clientesPlano * planoData.ltv;
//   });
  
//   cacPonderado = clientesTotal > 0 ? cacPonderado / clientesTotal : 0;
//   ltvPonderado = clientesTotal > 0 ? ltvPonderado / clientesTotal : 0;
  
//   const margemTotal = receitaTotal - custosTotal;
//   const margemPorcentual = receitaTotal > 0 ? (margemTotal / receitaTotal) * 100 : 0;
//   const ticketMedio = clientesTotal > 0 ? receitaTotal / clientesTotal : 0;
//   const ltvCacRatio = cacPonderado > 0 ? ltvPonderado / cacPonderado : 0;
  
//   // Cálculo do break-even
//   const churnMedio = Math.max(0.001, (parametros.churnRate + parametros.churnMelhorado) / 2);
//   const paybackMedio = cacPonderado / (ticketMedio - (custosTotal / clientesTotal));
//   const breakEven = custosTotal / (ticketMedio * (1 - churnMedio));
  
//   return {
//     receitaTotal: Math.round(receitaTotal),
//     custosTotal: Math.round(custosTotal),
//     margemTotal: Math.round(margemTotal),
//     margemPorcentual: Math.round(margemPorcentual * 10) / 10,
//     ticketMedio: Math.round(ticketMedio),
//     cacPonderado: Math.round(cacPonderado),
//     ltvPonderado: Math.round(ltvPonderado),
//     ltvCacRatioPonderado: Math.round(ltvCacRatio * 10) / 10,
//     paybackMedio: Math.round(paybackMedio * 10) / 10,
//     breakEven: Math.round(breakEven)
//   };
// }

// function calcularAdicionais(parametros) {
//   const adicionaisCalculados = adicionaisRaw.map(item => ({
//     ...item,
//     precoVenda: Math.round(item.custo * (1 + parametros.margemAdicionais)),
//     margem: Math.round(item.custo * parametros.margemAdicionais)
//   }));
  
//   // Calcular receita potencial dos adicionais
//   const receitaPotencial = adicionaisCalculados.reduce((total, item) => {
//     const taxaAdesao = parametros.txAdesao[item.tipo] || 0;
//     const clientesAderentes = parametros.metaClientes * taxaAdesao;
//     return total + (clientesAderentes * item.precoVenda);
//   }, 0);
  
//   return {
//     itens: adicionaisCalculados,
//     receitaPotencial: Math.round(receitaPotencial),
//     margemAdicional: Math.round(receitaPotencial * parametros.margemAdicionais)
//   };
// }
