// ===== CONTEÚDO DO MODAL DE TREINAMENTO =====

const MODAL_TREINAMENTO_HTML = `
<div class="modal-content">
  <div class="modal-header">
    <h2>🎓 Treinamento Completo - InfoÁgil SaaS Calculator</h2>
    <button class="close-modal" onclick="fecharTreinamento()">×</button>
  </div>
  <div class="modal-body">
    
    <details class="training-section">
      <summary>📊 1. Visão Geral da Aplicação</summary>
      <div class="training-content">
        <p>Esta calculadora foi desenvolvida especificamente para empresas de <span class="highlight">software contábil SaaS</span> determinarem preços competitivos e rentáveis.</p>
        
        <h4>🎯 Principais Objetivos:</h4>
        <ul>
          <li>Calcular preços baseados em custos reais</li>
          <li>Analisar competitividade de mercado</li>
          <li>Gerar relatórios profissionais</li>
          <li>Criar orçamentos personalizados</li>
        </ul>
        
        <div class="example">
          <strong>💡 Exemplo:</strong> Uma empresa com custos de R$ 50/cliente e margem de 40% gerará preços que garantem lucratividade sustentável.
        </div>
      </div>
    </details>

    <details class="training-section">
      <summary>🏢 2. Modelo de Negócio</summary>
      <div class="training-content">
        <p>Configure o <span class="highlight">tipo de operação</span> da sua empresa:</p>
        
        <h4>📋 Tipos Disponíveis:</h4>
        <ul>
          <li><strong>Próprio:</strong> Software desenvolvido internamente</li>
          <li><strong>White Label:</strong> Revenda de software de terceiros</li>
          <li><strong>Híbrido:</strong> Combinação de ambos</li>
        </ul>
        
        <h4>👥 Meta de Clientes:</h4>
        <p>Defina quantos clientes você pretende atender. Este número impacta diretamente na <span class="highlight">diluição dos custos fixos</span>.</p>
        
        <div class="warning">
          <strong>⚠️ Atenção:</strong> Metas muito baixas podem resultar em preços pouco competitivos devido ao alto custo fixo por cliente.
        </div>
      </div>
    </details>

    <details class="training-section">
      <summary>💰 3. Custos e Despesas</summary>
      <div class="training-content">
        <h4>🏗️ Custos Fixos Mensais:</h4>
        <ul>
          <li><strong>Infraestrutura:</strong> Servidores, cloud, CDN</li>
          <li><strong>Pessoal:</strong> Salários + encargos da equipe</li>
          <li><strong>Marketing:</strong> Publicidade, eventos, materiais</li>
          <li><strong>Administrativo:</strong> Contador, advogado, escritório</li>
          <li><strong>Outros:</strong> Licenças, seguros, diversos</li>
        </ul>
        
        <h4>🎯 Custos por Cliente:</h4>
        <ul>
          <li><strong>Suporte:</strong> Tempo dedicado por cliente/mês</li>
          <li><strong>White Label %:</strong> Percentual pago ao fornecedor</li>
        </ul>
        
        <h4>📈 Sazonalidade:</h4>
        <p>Multiplicador para períodos de maior demanda (ex: final de ano, IR).</p>
        
        <div class="example">
          <strong>💡 Exemplo:</strong> Infraestrutura R$ 2.000 + Pessoal R$ 15.000 + Marketing R$ 3.000 = R$ 20.000/mês
        </div>
      </div>
    </details>

    <details class="training-section">
      <summary>📊 4. Parâmetros de Negócio</summary>
      <div class="training-content">
        <h4>💹 Configurações Financeiras:</h4>
        <ul>
          <li><strong>Margem de Lucro:</strong> Percentual desejado sobre custos (recomendado: 20-40%)</li>
          <li><strong>Impostos:</strong> Simples Nacional, ISS, PIS/COFINS</li>
          <li><strong>Comissões:</strong> Percentual para vendedores/representantes</li>
        </ul>
        
        <h4>📈 Métricas de Performance:</h4>
        <ul>
          <li><strong>Churn Rate:</strong> Taxa mensal de cancelamento (%)</li>
          <li><strong>Churn Melhorado:</strong> Meta de melhoria do churn</li>
        </ul>
        
        <h4>🛒 Adicionais:</h4>
        <ul>
          <li><strong>Margem Adicionais:</strong> Lucro sobre módulos extras</li>
          <li><strong>Distribuição por Perfil:</strong> % de clientes por plano</li>
        </ul>
        
        <div class="warning">
          <strong>⚠️ Importante:</strong> A distribuição por perfil deve somar exatamente 100%
        </div>
      </div>
    </details>

    <details class="training-section">
      <summary>🎯 5. CAC por Segmento</summary>
      <div class="training-content">
        <p><span class="highlight">CAC (Customer Acquisition Cost)</span> é o custo para adquirir cada cliente.</p>
        
        <h4>👥 Perfis de Cliente:</h4>
        <ul>
          <li><strong>MEI:</strong> Vendas online, baixo CAC (R$ 50-150)</li>
          <li><strong>Contador:</strong> Parcerias, CAC médio (R$ 100-300)</li>
          <li><strong>Básico:</strong> Vendas diretas, CAC médio (R$ 150-400)</li>
          <li><strong>Intermediário:</strong> Processo comercial, CAC alto (R$ 250-500)</li>
          <li><strong>Premium:</strong> Vendas complexas, CAC muito alto (R$ 400-800)</li>
        </ul>
        
        <div class="example">
          <strong>💡 Dica:</strong> CAC muito baixo pode indicar baixa qualidade de clientes. CAC muito alto pode inviabilizar o negócio.
        </div>
      </div>
    </details>

    <details class="training-section">
      <summary>🔄 6. Executando Cálculos</summary>
      <div class="training-content">
        <h4>⚡ Como Calcular:</h4>
        <ol>
          <li>Preencha todos os campos obrigatórios</li>
          <li>Verifique se a distribuição soma 100%</li>
          <li>Clique em <span class="highlight">"🔥 Calcular Preços"</span></li>
          <li>Analise os resultados gerados</li>
        </ol>
        
        <h4>📋 Interpretando Resultados:</h4>
        <ul>
          <li><strong>Preço:</strong> Valor final para o cliente</li>
          <li><strong>Custo:</strong> Custo total por cliente</li>
          <li><strong>Margem:</strong> Lucro em reais</li>
          <li><strong>ROI:</strong> Retorno sobre investimento</li>
          <li><strong>LTV/CAC:</strong> Relação valor do cliente vs custo aquisição</li>
        </ul>
        
        <div class="example">
          <strong>🎯 Meta:</strong> LTV/CAC > 3.0 indica negócio saudável
        </div>
      </div>
    </details>

    <details class="training-section">
      <summary>🧩 7. Módulos Adicionais</summary>
      <div class="training-content">
        <h4>💎 Estratégia de Upsell:</h4>
        <ul>
          <li><strong>Muito Recomendado:</strong> WhatsApp, Boleto, PIX - Alta adesão esperada</li>
          <li><strong>Moderado:</strong> Contratos, Lotes, SEUPOS - Adesão média</li>
          <li><strong>Opcional:</strong> TEF, Integrações especiais - Baixa adesão</li>
        </ul>
        
        <h4>📊 Como Funciona:</h4>
        <ol>
          <li>Defina <span class="highlight">margem de adicionais</span> (ex: 50%)</li>
          <li>Configure <span class="highlight">taxa de adesão</span> por categoria</li>
          <li>Adicione novos módulos conforme necessário</li>
          <li>Sistema calcula receita automática</li>
        </ol>
        
        <div class="example">
          <strong>💰 Exemplo:</strong> WhatsApp custa R$ 20, com margem 50% = R$ 30. Com 70% de adesão em 100 clientes = R$ 2.100/mês extra.
        </div>
      </div>
    </details>

    <details class="training-section">
      <summary>📄 8. Relatórios e Análises</summary>
      <div class="training-content">
        <h4>📊 Relatório Analítico:</h4>
        <ul>
          <li>Sumário executivo com KPIs principais</li>
          <li>Breakdown de custos por plano</li>
          <li>Projeções financeiras detalhadas</li>
          <li>Análise de módulos adicionais</li>
          <li>Recomendações estratégicas</li>
        </ul>
        
        <h4>🎯 Quando Usar:</h4>
        <ul>
          <li><strong>Reuniões Estratégicas:</strong> Apresentar para diretoria</li>
          <li><strong>Análise Interna:</strong> Revisar estratégia de preços</li>
          <li><strong>Documentação:</strong> Justificar decisões comerciais</li>
        </ul>
        
        <div class="example">
          <strong>💼 Profissional:</strong> O relatório PDF é ideal para documentar e compartilhar análises com stakeholders.
        </div>
      </div>
    </details>

    <details class="training-section">
      <summary>🔧 9. Debug e Exportação</summary>
      <div class="training-content">
        <h4>🐛 Ferramentas de Debug:</h4>
        <ul>
          <li><strong>Debug Rápido:</strong> Verificação básica no console</li>
          <li><strong>Debug Completo:</strong> Análise detalhada de todos os dados</li>
          <li><strong>Exportar JSON:</strong> Backup completo dos dados</li>
        </ul>
        
        <h4>📤 Exportação de Dados:</h4>
        <ol>
          <li>Execute os cálculos</li>
          <li>Clique em "Exportar JSON"</li>
          <li>Arquivo será baixado automaticamente</li>
          <li>Use para backup ou integração</li>
        </ol>
        
        <div class="warning">
          <strong>⚠️ Importante:</strong> Sempre execute o cálculo antes de exportar para garantir dados atualizados.
        </div>
      </div>
    </details>

    <details class="training-section">
      <summary>🏆 10. Melhores Práticas</summary>
      <div class="training-content">
        <h4>✅ Práticas Recomendadas:</h4>
        <ul>
          <li><strong>Revisão Mensal:</strong> Atualizar custos e parâmetros</li>
          <li><strong>Monitoramento KPIs:</strong> LTV/CAC, Churn, Margem</li>
          <li><strong>Testes A/B:</strong> Experimentar diferentes estratégias</li>
          <li><strong>Documentação:</strong> Registrar mudanças e justificativas</li>
        </ul>
        
        <h4>❌ Erros Comuns:</h4>
        <ul>
          <li>Subestimar custos de suporte</li>
          <li>Não considerar sazonalidade</li>
          <li>CAC irrealista para o perfil</li>
          <li>Margem muito baixa ou muito alta</li>
          <li>Distribuição de clientes incorreta</li>
        </ul>
        
        <h4>🎯 Métricas de Sucesso:</h4>
        <ul>
          <li><strong>LTV/CAC > 3.0:</strong> Negócio sustentável</li>
          <li><strong>Churn < 5%:</strong> Boa retenção</li>
          <li><strong>Margem > 20%:</strong> Rentabilidade saudável</li>
          <li><strong>Break-even < Meta:</strong> Viabilidade garantida</li>
        </ul>
        
        <div class="example">
          <strong>🚀 Objetivo Final:</strong> Criar uma estratégia de preços que seja competitiva no mercado mas que garanta crescimento sustentável e lucratividade a longo prazo.
        </div>
      </div>
    </details>

  </div>
</div>
`;

// Função para injetar o modal no HTML
function inicializarModalTreinamento() {
  const modalContainer = document.getElementById('modalTreinamento');
  if (modalContainer) {
    modalContainer.innerHTML = MODAL_TREINAMENTO_HTML;
  }
}
