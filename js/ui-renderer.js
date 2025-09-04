// // ===== FUNÇÕES DE RENDERIZAÇÃO E UI =====

// function money(v){ 
//   if (isNaN(v) || v === null || v === undefined) return "R$ 0";
//   return "R$ " + Math.round(v).toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 }); 
// }

// function desenharCards(res){
//   const custosBase = getCustosBase();
//   const suporte = getSuporte();
//   const map = [
//     {k:'mei', titulo:'👶 MEI', base:custosBase.mei, sup:suporte.mei},
//     {k:'contador', titulo:'📊 Contador', base:custosBase.contador, sup:suporte.contador},
//     {k:'basico', titulo:'📦 Básico', base:custosBase.basico, sup:suporte.basico},
//     {k:'inter', titulo:'⚡ Intermediário', base:custosBase.inter, sup:suporte.inter},
//     {k:'premium', titulo:'🚀 Premium', base:custosBase.premium, sup:suporte.premium},
//   ];
  
//   const el = document.getElementById('cards');
//   el.innerHTML = '';
  
//   map.forEach(({k,titulo,base,sup}) => {
//     const i = res.planos[k];
//     const ltvCacColor = i.ltvCac >= 3 ? 'var(--ok)' : i.ltvCac >= 2 ? 'var(--warn)' : 'var(--danger)';
    
//     el.innerHTML += `
//       <div class="card">
//         <div class="mut">Custo: ${money(base)} + ${money(sup)}</div>
//         <div class="price">${money(i.preco)}</div>
//         <div class="mut">${titulo}</div>
//         <table style="margin-top:6px">
//           <tr><td>Margem</td><td class="right">${money(i.margem)}</td></tr>
//           <tr><td>ROI</td><td class="right">${i.roi}%</td></tr>
//           <tr><td>LTV</td><td class="right">${money(i.ltv)}</td></tr>
//           <tr><td>LTV/CAC</td><td class="right" style="color:${ltvCacColor}">${i.ltvCac}x</td></tr>
//           <tr><td>CAC</td><td class="right">${money(i.cac)}</td></tr>
//         </table>
//       </div>`;
//   });
// }

// function tabelaAddons(id, titulo, filtro, parametros){
//     const itens = adicionaisRaw.filter(a => a.tipo === filtro).map(a => ({
//         ...a,
//         venda: Math.round(a.custo * (1 + parametros.margemAdicionais))
//     }));
    
//     let rows = itens.map(it => `<tr>
//         <td>${it.nome}</td>
//         <td class="right">${money(it.custo)}</td>
//         <td class="right"><b>${money(it.venda)}</b></td>
//         <td class="center"><button onclick="removerItem('${it.id}')" style="padding:4px 8px; font-size:12px; background:#ef4444">🗑️</button></td>
//     </tr>`).join('');

//     const badgeMap = {
//         'muito': '<span class="badge b-ok">Muito recomendado</span>',
//         'moderado': '<span class="badge b-warn">Moderado</span>',
//         'opcional': '<span class="badge b-dang">Opcional</span>'
//     };
    
//     document.getElementById(id).innerHTML += `
//         <div class="card">
//           <h3 style="margin:0 0 6px">${titulo} ${badgeMap[filtro]}</h3>
//           <table>
//             <thead><tr><th class="left">Adicional</th><th class="right">Custo</th><th class="right">Preço sugerido</th><th class="center">Ação</th></tr></thead>
//             <tbody>${rows}</tbody>
//           </table>
//         </div>`;
//     return itens;
// }

// function atualizarMetricas(resultados) {
//   // Atualizar elementos da UI com os resultados calculados
//   const elementos = {
//     'mrrTotal': money(resultados.mrrTotal),
//     'custosFixosTotal': money(resultados.custosTotal),
//     'breakEven': Math.ceil(resultados.breakEven),
//     'ltv': money(resultados.ltvPonderado),
//     'ltvCacRatio': resultados.ltvCacRatioPonderado.toFixed(1) + "x",
//     'receitaAnual': money(resultados.receitaTotal * 12),
//     'receitaAdicionaisMensal': money(resultados.receitaAdicionais || 0),
//     'ticketMedioComAdicionais': money(resultados.ticketMedio)
//   };
  
//   Object.entries(elementos).forEach(([id, valor]) => {
//     const el = document.getElementById(id);
//     if (el) el.textContent = valor;
//   });
// }

// function renderizarResultados(dadosCalculados) {
//   const { resultados } = dadosCalculados;
  
//   // Renderizar cards de preços
//   desenharCards(resultados);
  
//   // Atualizar métricas
//   atualizarMetricas(resultados);
  
//   // Mostrar alertas e validações
//   mostrarAlertas();
//   validarCAC();
// }
