// ===== TEMPLATE DO RELATÓRIO HTML =====

function gerarConteudoRelatorio(dados, dataHora, custosFixosTotal, receitaAnual, margemMedia, receitaAdicionais, ticketMedio) {
    const analiseAtual = window.analiseAtual || null; // Variável global para análise competitiva
    
    return `
        <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #007acc; padding-bottom: 20px;">
            <h1 style="color: #007acc; margin: 0; font-size: 24px;">📊 RELATÓRIO COMPLETO DE PRECIFICAÇÃO SaaS</h1>
            <p style="margin: 5px 0; color: #666;"><strong>Info Ágil Sistemas</strong></p>
            <p style="margin: 5px 0; color: #666;">Gerado em: ${dataHora}</p>
            <p style="margin: 5px 0; color: #666;">Documento para análise interna e estratégica</p>
        </div>

        ${gerarSumarioExecutivo(dados, receitaAnual, margemMedia, receitaAdicionais, ticketMedio)}
        ${gerarSecaoMetodologia()}
        ${gerarParametrosUtilizados(dados, custosFixosTotal)}
        ${gerarPrecosCalculados(dados)}
        ${gerarProjecoesFinanceiras(dados)}
        ${gerarModulosAdicionais(dados)}
        ${analiseAtual ? gerarAnaliseComcorrencia(analiseAtual) : ''}
        ${gerarRecomendacoes(dados, margemMedia, analiseAtual)}
        ${gerarRodape()}
    `;
}

function gerarSumarioExecutivo(dados, receitaAnual, margemMedia, receitaAdicionais, ticketMedio) {
    return `
        <div style="margin: 25px 0;">
            <h2 style="color: #007acc; border-bottom: 1px solid #ddd; padding-bottom: 5px;">📋 SUMÁRIO EXECUTIVO</h2>
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 6px;">
                <h3>🎯 Principais Resultados:</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
                    <div>
                        <strong>💰 Receita</strong><br>
                        MRR Projetado: ${money(dados.resultados.mrrTotal || 0)}<br>
                        Receita Anual: ${money(receitaAnual || 0)}<br>
                        Receita Adicionais: ${money(receitaAdicionais || 0)}<br>
                        Ticket Médio: ${money(ticketMedio || 0)}
                    </div>
                    <div>
                        <strong>📊 Métricas</strong><br>
                        LTV Médio: ${money(dados.resultados.ltvPonderado || 0)}<br>
                        LTV/CAC Ratio: ${(dados.resultados.ltvCacRatioPonderado || 0).toFixed(1)}x<br>
                        Margem Média: ${margemMedia.toFixed(1)}%<br>
                        Break-even: ${dados.resultados.breakEven || 0} clientes
                    </div>
                    <div>
                        <strong>⚡ Status</strong><br>
                        ${(dados.resultados.ltvCacRatioPonderado || 0) >= 3 ? '✅ LTV/CAC Saudável' : '⚠️ LTV/CAC Baixo'}<br>
                        ${margemMedia >= 20 ? '✅ Margem Adequada' : '⚠️ Margem Baixa'}<br>
                        ${(dados.inputs.parametros.churnRate || 0) <= 5 ? '✅ Churn Controlado' : '⚠️ Churn Alto'}<br>
                        Total Adicionais: ${adicionaisRaw.length} itens
                    </div>
                </div>
            </div>
        </div>
    `;
}

function gerarSecaoMetodologia() {
    return `
        <div style="margin: 25px 0;">
            <h2 style="color: #007acc; border-bottom: 1px solid #ddd; padding-bottom: 5px;">🎯 METODOLOGIA UTILIZADA</h2>
            <h3>Fórmulas Principais:</h3>
            <div style="background: #f1f3f4; padding: 12px; border-radius: 4px; font-family: monospace; margin: 10px 0;">
                <strong>Preço Final:</strong><br>
                P = (Custo Direto / (1 - Margem)) / (1 - Impostos - Comissões - WhiteLabel)
            </div>
            <div style="background: #f1f3f4; padding: 12px; border-radius: 4px; font-family: monospace; margin: 10px 0;">
                <strong>LTV (Lifetime Value):</strong><br>
                LTV = (Margem Contribuição × 12) / Taxa Churn Média
            </div>
        </div>
    `;
}

function gerarParametrosUtilizados(dados, custosFixosTotal) {
    return `
        <div style="margin: 25px 0;">
            <h2 style="color: #007acc; border-bottom: 1px solid #ddd; padding-bottom: 5px;">📊 PARÂMETROS UTILIZADOS</h2>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr><td style="border: 1px solid #ddd; padding: 8px;"><strong>Margem de Lucro Desejada</strong></td><td style="border: 1px solid #ddd; padding: 8px;">${(dados.inputs.parametros.margemLucro * 100).toFixed(1)}%</td></tr>
                <tr><td style="border: 1px solid #ddd; padding: 8px;"><strong>Meta de Clientes</strong></td><td style="border: 1px solid #ddd; padding: 8px;">${dados.inputs.parametros.metaClientes}</td></tr>
                <tr><td style="border: 1px solid #ddd; padding: 8px;"><strong>Churn Rate Inicial</strong></td><td style="border: 1px solid #ddd; padding: 8px;">${(dados.inputs.parametros.churnRate * 100).toFixed(1)}%/mês</td></tr>
                <tr><td style="border: 1px solid #ddd; padding: 8px;"><strong>Custos Fixos Totais</strong></td><td style="border: 1px solid #ddd; padding: 8px;">${money(custosFixosTotal)}</td></tr>
            </table>
        </div>
    `;
}

function gerarPrecosCalculados(dados) {
    return `
        <div style="margin: 25px 0;">
            <h2 style="color: #007acc; border-bottom: 1px solid #ddd; padding-bottom: 5px;">💎 PREÇOS CALCULADOS POR PLANO</h2>
            ${Object.entries(dados.resultados.planos).map(([plano, planoData]) => `
                <div style="border: 2px solid #007acc; border-radius: 6px; padding: 15px; margin: 15px 0;">
                    <h3 style="color: #007acc; margin-top: 0;">PLANO ${plano.toUpperCase()}</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <h4>💰 Composição de Custos</h4>
                            <p>Custo Direto Total: ${money(planoData.custoDireto || 0)}</p>
                        </div>
                        <div>
                            <h4>📊 Resultados</h4>
                            <p><strong style="font-size: 18px; color: #007acc;">Preço: ${money(planoData.preco || 0)}</strong></p>
                            <p>ROI: ${(planoData.roi || 0).toFixed(0)}%</p>
                            <p>LTV: ${money(planoData.ltv || 0)}</p>
                            <p>LTV/CAC: ${(planoData.ltvCac || 0).toFixed(1)}x</p>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function gerarProjecoesFinanceiras(dados) {
    return `
        <div style="margin: 25px 0;">
            <h2 style="color: #007acc; border-bottom: 1px solid #ddd; padding-bottom: 5px;">📈 PROJEÇÕES FINANCEIRAS</h2>
            <div style="background: #f8f9fa; border: 1px solid #dee2e6; padding: 15px; border-radius: 6px;">
                <h4>Distribuição de Receita por Plano</h4>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background: #f8f9fa;">
                        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Plano</th>
                        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Clientes</th>
                        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Preço</th>
                        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Receita Mensal</th>
                    </tr>
                    ${Object.entries(dados.resultados.planos).map(([plano, planoData]) => {
                        const clientes = Math.round(dados.inputs.parametros.metaClientes * (dados.inputs.parametros.distribuicao[plano] || 0));
                        const receitaPlano = clientes * (planoData.preco || 0);
                        return `<tr>
                            <td style="border: 1px solid #ddd; padding: 8px;">${plano.toUpperCase()}</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${clientes}</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${money(planoData.preco || 0)}</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${money(receitaPlano)}</td>
                        </tr>`;
                    }).join('')}
                </table>
            </div>
        </div>
    `;
}

function gerarModulosAdicionais(dados) {
    return `
        <div style="margin: 25px 0;">
            <h2 style="color: #007acc; border-bottom: 1px solid #ddd; padding-bottom: 5px;">🧩 MÓDULOS ADICIONAIS DISPONÍVEIS</h2>
            <div style="background: #f8f9fa; border: 1px solid #dee2e6; padding: 15px; border-radius: 6px;">
                ${['muito', 'moderado', 'opcional'].map(tipo => {
                    const itens = adicionaisRaw.filter(a => a.tipo === tipo);
                    const tipoNome = {muito: 'Muito Recomendado', moderado: 'Moderadamente Recomendado', opcional: 'Opcional'}[tipo];
                    const corTipo = {muito: '#28a745', moderado: '#ffc107', opcional: '#6c757d'}[tipo];
                    return itens.length > 0 ? `
                        <h4 style="color: ${corTipo}; margin: 15px 0 5px 0;">${tipoNome}</h4>
                        <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">
                            <tr style="background: #f1f3f4;">
                                <th style="border: 1px solid #ddd; padding: 6px; text-align: left;">Módulo</th>
                                <th style="border: 1px solid #ddd; padding: 6px; text-align: left;">Custo Base</th>
                                <th style="border: 1px solid #ddd; padding: 6px; text-align: left;">Preço Venda</th>
                                <th style="border: 1px solid #ddd; padding: 6px; text-align: left;">Margem</th>
                            </tr>
                            ${itens.map(item => {
                                const precoVenda = Math.round(item.custo * (1 + (dados.inputs.parametros.margemAdicionais || 0.5)));
                                const margem = ((precoVenda - item.custo) / precoVenda * 100).toFixed(0);
                                return `<tr>
                                    <td style="border: 1px solid #ddd; padding: 6px;">${item.nome}</td>
                                    <td style="border: 1px solid #ddd; padding: 6px;">${money(item.custo)}</td>
                                    <td style="border: 1px solid #ddd; padding: 6px;">${money(precoVenda)}</td>
                                    <td style="border: 1px solid #ddd; padding: 6px;">${margem}%</td>
                                </tr>`;
                            }).join('')}
                        </table>
                    ` : '';
                }).join('')}
            </div>
        </div>
    `;
}

function gerarAnaliseComcorrencia(analiseAtual) {
    return `
        <div style="margin: 25px 0;">
            <h2 style="color: #007acc; border-bottom: 1px solid #ddd; padding-bottom: 5px;">🏪 ANÁLISE DE CONCORRÊNCIA</h2>
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 6px;">
                <p><strong>Estratégia Aplicada:</strong> ${analiseAtual.estrategia.toUpperCase()}</p>
                <p><strong>Impacto no MRR:</strong> ${money(analiseAtual.impactoMRR || 0)}</p>
                <p><strong>Impacto Anual:</strong> ${money((analiseAtual.impactoMRR || 0) * 12)}</p>
            </div>
        </div>
    `;
}

function gerarRecomendacoes(dados, margemMedia, analiseAtual) {
    return `
        <div style="margin: 25px 0;">
            <h2 style="color: #007acc; border-bottom: 1px solid #ddd; padding-bottom: 5px;">💡 RECOMENDAÇÕES</h2>
            <div style="background: #d4edda; padding: 15px; border-radius: 6px;">
                <h4>🎯 Recomendações Estratégicas:</h4>
                <ul>
                    <li><strong>Monitoramento KPIs:</strong> Acompanhar LTV/CAC, churn e margem mensalmente</li>
                    <li><strong>Otimização de Churn:</strong> ${(dados.inputs.parametros.churnRate || 0) > 5 ? 'CRÍTICO - Implementar programa de retenção urgente' : 'Manter foco em redução contínua'}</li>
                    <li><strong>Estratégia de Crescimento:</strong> Desenvolver upsell com módulos adicionais (${adicionaisRaw.length} disponíveis)</li>
                    <li><strong>Análise Competitiva:</strong> ${analiseAtual ? 'Revisar posicionamento baseado na última análise' : 'Implementar análise de concorrência trimestral'}</li>
                    <li><strong>Pricing:</strong> ${margemMedia < 20 ? 'AÇÃO NECESSÁRIA - Revisar estrutura de custos ou aumentar preços' : 'Estrutura de preços adequada'}</li>
                </ul>
                
                <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 12px; border-radius: 4px; margin-top: 15px;">
                    <strong>📊 Próxima Revisão:</strong> Recomenda-se revisar esta análise em 30 dias ou quando houver mudanças significativas nos custos/concorrência.
                </div>
            </div>
        </div>
    `;
}

function gerarRodape() {
    return `
        <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #666;">
            <p>Relatório gerado pela Calculadora de Precificação SaaS - Info Ágil Sistemas</p>
            <p>Documento confidencial para uso interno</p>
        </div>
    `;
}
