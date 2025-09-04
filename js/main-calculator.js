// ===== FUNÇÃO PRINCIPAL DE CÁLCULO =====

function calcular(){
  try {
    const {custoFixo, parametros} = getInputs();
    
    const custoFixoTotal = Object.values(custoFixo).reduce((a,b)=>a+b,0);
    const custoFixoComSazonalidade = custoFixoTotal * (parametros.sazonalidade || 1);
    
    const custosBase = getCustosBase();
    const suporte = getSuporte();
    const cac = getCAC();

    const planos = {
        mei: calcularPrecoPlano('mei', custosBase.mei, suporte.mei, custoFixoComSazonalidade, parametros, cac.mei),
        contador: calcularPrecoPlano('contador', custosBase.contador, suporte.contador, custoFixoComSazonalidade, parametros, cac.contador),
        basico: calcularPrecoPlano('basico', custosBase.basico, suporte.basico, custoFixoComSazonalidade, parametros, cac.basico),
        inter: calcularPrecoPlano('inter', custosBase.inter, suporte.inter, custoFixoComSazonalidade, parametros, cac.inter),
        premium: calcularPrecoPlano('premium', custosBase.premium, suporte.premium, custoFixoComSazonalidade, parametros, cac.premium)
    };
    
    const clientesPorPlano = {
        mei: parametros.metaClientes * parametros.distribuicao.mei,
        contador: parametros.metaClientes * parametros.distribuicao.contador,
        basico: parametros.metaClientes * parametros.distribuicao.basico,
        inter: parametros.metaClientes * parametros.distribuicao.inter,
        premium: parametros.metaClientes * parametros.distribuicao.premium
    };

    const mrrPlanos = Object.keys(planos).reduce((sum, key) => sum + (clientesPorPlano[key] * planos[key].preco), 0);

    // Adicionais
    document.getElementById('addonsTables').innerHTML='';
    const addMuito = tabelaAddons('addonsTables','Pack — Muito Recomendado','muito', parametros);
    const addMod   = tabelaAddons('addonsTables','Pack — Moderado','moderado', parametros);
    const addOpc   = tabelaAddons('addonsTables','Pack — Opcional','opcional', parametros);

    const calcularReceitaAdicionais = (arr, tx, itensPorCliente) => {
        const mediaVenda = arr.length ? arr.reduce((s,i)=>s+i.venda,0)/arr.length : 0;
        return parametros.metaClientes * tx * mediaVenda * itensPorCliente;
    };

    const receitaAdicionais = calcularReceitaAdicionais(addMuito, parametros.txAdesao.muito, 1.5) +
                              calcularReceitaAdicionais(addMod, parametros.txAdesao.moderado, 1.0) +
                              calcularReceitaAdicionais(addOpc, parametros.txAdesao.opcional, 0.5);
    
    const mrrTotal = mrrPlanos + receitaAdicionais;
    const ticketMedio = mrrTotal / Math.max(1, parametros.metaClientes);
    const breakEven = custoFixoTotal / Math.max(1, ticketMedio - (Object.values(custosBase).reduce((a,b)=>a+b,0) / Object.keys(custosBase).length));
    
    const ltvPonderado = Object.keys(planos).reduce((sum, key) => sum + (planos[key].ltv * parametros.distribuicao[key]), 0);
    const cacPonderado = Object.keys(cac).reduce((sum, key) => sum + (cac[key] * parametros.distribuicao[key]), 0);
    const ltvCacRatioPonderado = cacPonderado > 0 ? ltvPonderado / cacPonderado : 0;

    // Atualizar UI
    desenharCards({planos});
    document.getElementById('mrrTotal').textContent = money(mrrTotal);
    document.getElementById('custosFixosTotal').textContent = money(custoFixoTotal);
    document.getElementById('breakEven').textContent = Math.ceil(breakEven);
    document.getElementById('ltv').textContent = money(ltvPonderado);
    document.getElementById('ltvCacRatio').textContent = ltvCacRatioPonderado.toFixed(1) + "x";
    document.getElementById('receitaAnual').textContent = money(mrrTotal * 12);
    document.getElementById('receitaAdicionaisMensal').textContent = money(receitaAdicionais);
    document.getElementById('ticketMedioComAdicionais').textContent = money(ticketMedio);
    
    dadosCalculados = { 
      inputs: { custoFixo, parametros, custosBase, suporte, cac }, 
      resultados: { planos, mrrTotal, breakEven, ltvPonderado, ltvCacRatioPonderado } 
    };
    
    mostrarAlertas();
    validarCAC();

  } catch (error) {
    console.error('Erro no cálculo:', error);
  }
}
