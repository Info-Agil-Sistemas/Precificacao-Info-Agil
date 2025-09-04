// ===== FUNÇÕES DE VALIDAÇÃO E AUTO-CORREÇÃO =====

function validarDistribuicao() {
  const inputs = ['distribMei', 'distribContador', 'distribBasico', 'distribInter', 'distribPremium'];
  const valores = inputs.map(id => parseFloat(document.getElementById(id).value) || 0);
  const soma = valores.reduce((a, b) => a + b, 0);
  
  const somaEl = document.getElementById('somaDistribuicao');
  somaEl.textContent = `Total: ${soma.toFixed(1)}%`;
  
  if (Math.abs(soma - 100) > 0.1) {
    somaEl.style.color = 'var(--danger)';
    inputs.forEach(id => document.getElementById(id).classList.add('validation-error'));
  } else {
    somaEl.style.color = 'var(--ok)';
    inputs.forEach(id => document.getElementById(id).classList.remove('validation-error'));
  }
}

function autoCorrigirDistribuicao() {
  const inputs = ['distribMei', 'distribContador', 'distribBasico', 'distribInter', 'distribPremium'];
  const valores = inputs.map(id => parseFloat(document.getElementById(id).value) || 0);
  const soma = valores.reduce((a, b) => a + b, 0);
  
  if (soma === 0) return;
  
  const fator = 100 / soma;
  let somaCorrigida = 0;
  inputs.forEach((id, i) => {
    let novoValor = valores[i] * fator;
    document.getElementById(id).value = novoValor.toFixed(1);
    somaCorrigida += parseFloat(novoValor.toFixed(1));
  });

  // Ajuste fino para garantir que a soma seja exatamente 100
  let diferenca = 100 - somaCorrigida;
  if (diferenca !== 0) {
      let ultimoInput = document.getElementById(inputs[inputs.length - 1]);
      ultimoInput.value = (parseFloat(ultimoInput.value) + diferenca).toFixed(1);
  }
  
  validarDistribuicao();
}

function validarCAC() {
    if (!dadosCalculados?.resultados?.planos) return;
    const inputs = ['cacMei', 'cacContador', 'cacBasico', 'cacInter', 'cacPremium'];
    const planos = ['mei', 'contador', 'basico', 'inter', 'premium'];
    
    inputs.forEach((cacId, i) => {
        const cacEl = document.getElementById(cacId);
        const cac = parseFloat(cacEl.value) || 0;
        const planoData = dadosCalculados.resultados.planos[planos[i]];
        
        if (planoData && cac > planoData.preco * 3) {
            cacEl.classList.add('validation-error');
        } else {
            cacEl.classList.remove('validation-error');
        }
    });
}

function mostrarAlertas() {
  const container = document.getElementById('alertasValidacao');
  container.innerHTML = '';
  const alertas = [];
  
  const soma = ['distribMei', 'distribContador', 'distribBasico', 'distribInter', 'distribPremium']
    .reduce((acc, id) => acc + (parseFloat(document.getElementById(id).value) || 0), 0);
  
  if (Math.abs(soma - 100) > 0.1) {
    alertas.push({
      tipo: 'warn',
      mensagem: `Distribuição de planos soma ${soma.toFixed(1)}% (deve ser 100%). <button onclick="autoCorrigirDistribuicao()" style="margin-left:10px; padding:3px 8px; background:var(--ok); border:none; border-radius:4px; cursor:pointer">Auto-corrigir</button>`
    });
  }
  
  const margem = parseFloat(document.getElementById('margemLucro').value) || 0;
  if (margem < 20) {
    alertas.push({ tipo: 'warn', mensagem: `Margem de lucro baixa (${margem}%). Considere aumentar para sustentar crescimento.` });
  }
  
  const churn = parseFloat(document.getElementById('churnRate').value) || 0;
  if (churn > 8) {
    alertas.push({ tipo: 'danger', mensagem: `Churn rate alto (${churn}%/mês). Pode inviabilizar o modelo SaaS.` });
  }

  alertas.forEach(alerta => {
    const div = document.createElement('div');
    div.className = `alert alert-${alerta.tipo}`;
    div.innerHTML = `⚠️ ${alerta.mensagem}`;
    container.appendChild(div);
  });
}
