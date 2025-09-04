// // ===== FUNÇÕES AUXILIARES E UTILITÁRIAS =====

// function resetarPadrao() {
//   const defaults = {
//     'custosPessoal': 0, 'infraestrutura': 200, 'marketing': 0, 'contador': 800,
//     'comunicacao': 0, 'outros': 350, 'setupAvante': 0, 'custosContingencia': 500,
//     'custoMei': 25, 'custoContador': 30, 'custoBasico': 36, 'custoInter': 56, 'custoPremium': 130,
//     'suporteMei': 20, 'suporteContador': 30, 'suporteBasico': 35, 'suporteInter': 50, 'suportePremium': 80,
//     'margemLucro': 30, 'metaClientes': 120,
//     'distribMei': 15, 'distribContador': 20, 'distribBasico': 30, 'distribInter': 25, 'distribPremium': 10,
//     'churnRate': 4, 'churnMelhorado': 2.5,
//     'cacMei': 150, 'cacContador': 200, 'cacBasico': 250, 'cacInter': 350, 'cacPremium': 500,
//     'impostos': 8.5, 'comissoes': 0, 'whiteLabelPct': 30, 'sazonalidade': 1.5,
//     'margemAdicionais': 50, 'txMuito': 70, 'txMod': 40, 'txOpc': 20,
//     'crescimentoMensal': 8, 'periodoProjecao': 12, 'metaReceitaFinal': 50000
//   };
//   for (const [id, value] of Object.entries(defaults)) {
//     const el = document.getElementById(id);
//     if (el) el.value = value;
//   }
//   validarDistribuicao();
//   calcular();
// }

// function adicionarItem() {
//   const nome = document.getElementById('novoAdicional').value.trim();
//   const custo = parseFloat(document.getElementById('novoCusto').value) || 0;
//   const categoria = document.getElementById('novaCategoria').value;
//   if (!nome || custo <= 0) return;
  
//   adicionaisRaw.push({ nome, custo, tipo: categoria, id: `addon_${Date.now()}` });
//   document.getElementById('novoAdicional').value = '';
//   document.getElementById('novoCusto').value = '20';
//   calcular();
// }

// function removerItem(id) {
//   adicionaisRaw = adicionaisRaw.filter(item => item.id !== id);
//   calcular();
// }

// function exportarJSON(){
//   if(!Object.keys(dadosCalculados).length){ alert("Calcule primeiro."); return; }
//   const blob = new Blob([JSON.stringify(dadosCalculados, null, 2)], {type:"application/json"});
//   const a = document.createElement("a");
//   a.href = URL.createObjectURL(blob);
//   a.download = `precificacao_saas_${new Date().toISOString().slice(0,10)}.json`;
//   a.click();
//   URL.revokeObjectURL(a.href);
// }

// function testeRapido() {
//   console.clear();
//   console.log("--- DEBUG INICIADO ---");
//   console.log("Valores de Input:", getInputs());
//   console.log("Dados Calculados:", dadosCalculados);
//   console.log("--- DEBUG FINALIZADO ---");
// }

// function debugCompleto() {
//     console.clear();
//     console.log("🐛 === DEBUG COMPLETO - InfoÁgil SaaS Calculator ===");
    
//     // 1. Informações do sistema
//     console.group("📊 Informações do Sistema");
//     console.log("Data/Hora:", new Date().toLocaleString());
//     console.log("User Agent:", navigator.userAgent);
//     console.log("URL:", window.location.href);
//     console.log("Viewport:", window.innerWidth + "x" + window.innerHeight);
//     console.groupEnd();

//     // 2. Estado atual dos inputs
//     console.group("📝 Estado dos Inputs");
//     const inputs = document.querySelectorAll('input');
//     inputs.forEach(input => {
//         console.log(`${input.id || input.name || 'sem-id'}: ${input.value} (${input.type})`);
//     });
//     console.groupEnd();

//     // 3. Executar cálculo e capturar resultados
//     console.group("🔢 Resultados dos Cálculos");
//     try {
//         calcular();
//         console.log("Dados Calculados:", dadosCalculados);
//         console.log("Estado da aplicação OK ✅");
//     } catch (error) {
//         console.error("Erro no cálculo:", error);
//     }
//     console.groupEnd();
    
//     // 4. Abrir DevTools automaticamente
//     console.log("🔧 DevTools aberto. Verifique as informações acima para debug.");
    
//     alert("Debug completo executado! ✅\nVerifique o console (F12) para informações detalhadas.");
// }

// // Funções do Modal de Treinamento
// function abrirTreinamento() {
//     document.getElementById('modalTreinamento').style.display = 'flex';
//     document.body.style.overflow = 'hidden'; // Previne scroll do body
// }

// function fecharTreinamento() {
//     document.getElementById('modalTreinamento').style.display = 'none';
//     document.body.style.overflow = 'auto'; // Restaura scroll do body
// }

// // Event listeners para modal
// function initModalEvents() {
//     // Primeiro inicializar o conteúdo do modal
//     inicializarModalTreinamento();
    
//     // Fechar modal clicando fora do conteúdo
//     document.getElementById('modalTreinamento').addEventListener('click', function(e) {
//         if (e.target === this) {
//             fecharTreinamento();
//         }
//     });

//     // Fechar modal com tecla ESC
//     document.addEventListener('keydown', function(e) {
//         if (e.key === 'Escape') {
//             fecharTreinamento();
//         }
//     });
// }
