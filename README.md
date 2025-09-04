# 📊 InfoÁgil SaaS Pricing Calculator - Estrutura Modular

## 🗂️ Estrutura de Arquivos

```
Precificacao-Info-Agil/
├── index.html                 # Arquivo HTML principal
├── saas_pricing_calculator_v3.html  # Arquivo original monolítico (backup)
├── README.md                  # Esta documentação
├── logo-info-agil-sem-fundo.png     # Logo da empresa
├── css/                       # Estilos CSS modulares
│   ├── main.css              # Estilos principais e layout
│   ├── tooltips.css          # Estilos para tooltips de ajuda
│   ├── app-bar.css           # Estilos da barra superior
│   └── modal.css             # Estilos dos modais
├── js/                        # JavaScript modular
│   ├── index.js              # Arquivo principal de entrada
│   ├── config.js             # Variáveis globais e configurações
│   ├── validations.js        # Funções de validação
│   ├── data-collectors.js    # Funções para coleta de dados
│   ├── calculations.js       # Lógica de cálculo dos preços
│   ├── ui-renderer.js        # Funções de renderização da interface
│   ├── utils.js              # Funções utilitárias
│   ├── modal-content.js      # Conteúdo do modal de treinamento
│   ├── pdf-reports.js        # Geração de relatórios PDF
│   ├── report-templates.js   # Templates HTML dos relatórios
│   └── main-calculator.js    # Função principal de cálculo
└── assets/                    # Recursos adicionais (futuro)
    └── images/               # Imagens e ícones
```

## 🎯 Arquitetura Modular

### **CSS Modular**
- **`main.css`**: Reset, variáveis CSS, layout base, tipografia, formulários
- **`tooltips.css`**: Sistema de tooltips de ajuda
- **`app-bar.css`**: Barra de navegação superior
- **`modal.css`**: Estilos para modais e overlays

### **JavaScript Modular**
- **`config.js`**: Variáveis globais, dados de adicionais, configurações padrão
- **`validations.js`**: Validações de distribuição, CAC, alertas automáticos
- **`data-collectors.js`**: Funções para extrair dados dos formulários
- **`calculations.js`**: Lógica principal de cálculo de preços e métricas
- **`ui-renderer.js`**: Renderização de cards, tabelas e métricas
- **`utils.js`**: Funções auxiliares (reset, debug, modal, etc.)
- **`pdf-reports.js`**: Geração de relatórios PDF com jsPDF
- **`report-templates.js`**: Templates HTML para relatórios
- **`main-calculator.js`**: Orquestração principal dos cálculos
- **`modal-content.js`**: Conteúdo do modal de treinamento
- **`index.js`**: Inicialização da aplicação e event listeners

## 🔧 Como Funciona

### **Inicialização**
1. `index.html` carrega todos os arquivos CSS e JS
2. `index.js` inicializa a aplicação quando DOM está pronto
3. Aplica valores padrão e configura event listeners
4. Modal de treinamento é carregado dinamicamente

### **Fluxo de Cálculo**
1. Usuario preenche dados → **`data-collectors.js`**
2. Dados são validados → **`validations.js`**
3. Cálculos são executados → **`calculations.js`**
4. Resultados são renderizados → **`ui-renderer.js`**
5. Alertas são mostrados → **`validations.js`**

### **Geração de Relatórios**
1. Dados calculados → **`pdf-reports.js`**
2. Template HTML → **`report-templates.js`**
3. Conversão para PDF → **html2canvas + jsPDF**
4. Download automático

## ✨ Benefícios da Modularização

### **Manutenibilidade**
- Cada arquivo tem responsabilidade específica
- Fácil localização de bugs e funcionalidades
- Código mais limpo e organizado

### **Escalabilidade**
- Fácil adicionar novos módulos
- CSS e JS podem ser carregados sob demanda
- Estrutura preparada para bundlers (Webpack, Vite)

### **Performance**
- Possibilidade de lazy loading
- Cache individual por módulo
- Minificação e compressão específica

### **Desenvolvimento**
- Múltiplos desenvolvedores podem trabalhar simultaneamente
- Controle de versão mais eficiente
- Testes unitários por módulo

## 🚀 Como Usar

### **Desenvolvimento Local**
1. Abra `index.html` diretamente no navegador
2. Ou use um servidor local: `python -m http.server 8000`
3. Acesse: `http://localhost:8000`

### **Deploy**
1. Todos os arquivos devem estar na mesma estrutura
2. Logo deve estar na raiz: `logo-info-agil-sem-fundo.png`
3. Servidor deve suportar arquivos estáticos
4. CORS deve estar configurado para relatórios PDF

## 🔄 Migração do Arquivo Original

O arquivo `saas_pricing_calculator_v3.html` foi dividido em:

### **HTML** → `index.html`
- Estrutura principal preservada
- Links para CSS e JS modulares
- Modal de treinamento será carregado dinamicamente

### **CSS** → `css/`
- Estilos organizados por funcionalidade
- Variáveis CSS centralizadas
- Responsive design mantido

### **JavaScript** → `js/`
- Funções organizadas por responsabilidade
- Variáveis globais centralizadas
- Event listeners organizados

## 📋 Checklist de Compatibilidade

✅ **Funcionalidades Preservadas:**
- [x] Cálculo de preços por plano
- [x] Validações automáticas
- [x] Sistema de tooltips
- [x] Modal de treinamento
- [x] Relatórios PDF
- [x] Exportação JSON
- [x] Debug completo
- [x] App bar com botões
- [x] Tema visual Info Ágil
- [x] Responsividade

✅ **Melhorias Implementadas:**
- [x] Código modular e organizado
- [x] Separação de responsabilidades
- [x] Fácil manutenção
- [x] Documentação completa
- [x] Estrutura escalável

## 🆘 Resolução de Problemas

### **Erro: Função não encontrada**
- Verifique se todos os arquivos JS estão carregando
- Ordem de carregamento deve ser respeitada
- Verifique console do navegador (F12)

### **Estilos não aplicados**
- Verifique se arquivos CSS estão no diretório correto
- Limpe cache do navegador (Ctrl+F5)
- Verifique console para erros de carregamento

### **PDF não gera**
- Verifique se bibliotecas jsPDF e html2canvas carregaram
- Teste em navegador atualizado
- Verifique se popup blocker está desabilitado

## 📞 Suporte

Para dúvidas sobre a estrutura modular:
1. Consulte os comentários no código
2. Verifique console do navegador
3. Use função `debugCompleto()` para diagnosticar
4. Entre em contato com a equipe de desenvolvimento

---

**Info Ágil Sistemas** - Calculadora de Precificação SaaS v3  
*Agora com arquitetura modular para melhor manutenibilidade*
