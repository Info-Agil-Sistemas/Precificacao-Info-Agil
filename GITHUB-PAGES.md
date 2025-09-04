# 🚀 Deploy no GitHub Pages - InfoÁgil

## ✅ **Deploy Automático Configurado!**

Este projeto está configurado para deploy automático no **GitHub Pages**.

### 🎯 **Como Ativar (Uma vez só):**

1. **No repositório GitHub**, vá para:
   - **Settings** > **Pages**
   
2. **Configure Source:**
   - **Source**: `GitHub Actions`
   
3. **Pronto!** 🎉

### 🔄 **Como Funciona:**

- ✅ **Push na branch `main`** = Deploy automático
- ✅ **Sem tokens** ou configurações externas
- ✅ **URL fixa** = `https://info-agil-sistemas.github.io/Precificacao-Info-Agil/saas_pricing_calculator_v3.html`

### 📋 **Estrutura do Projeto:**

```
/
├── saas_pricing_calculator_v3.html    # 🎯 Arquivo PRINCIPAL
├── index.html                         # Versão modular (desenvolvimento)
├── _index.html                        # Página de redirecionamento
├── css/                              # Arquivos CSS modulares
├── js/                               # Arquivos JavaScript modulares
├── .nojekyll                         # Configuração GitHub Pages
└── .github/workflows/                # Deploy automático
    └── github-pages.yml              # Workflow do GitHub Actions
```

### 🌐 **URLs de Acesso:**

- **Principal**: `https://info-agil-sistemas.github.io/Precificacao-Info-Agil/saas_pricing_calculator_v3.html`
- **Versão modular**: `https://info-agil-sistemas.github.io/Precificacao-Info-Agil/index.html`

### 🔧 **Troubleshooting:**

#### ❌ **Deploy não funciona**
1. Vá em Settings > Pages
2. Source = `GitHub Actions`
3. Aguarde alguns minutos

#### ❌ **404 Error**
1. Verifique se o arquivo existe na branch main
2. URL correta: inclua `.html` no final

#### ❌ **CSS/JS não carrega**
1. Verifique caminhos relativos nos arquivos
2. Arquivo `.nojekyll` deve estar presente

### 📊 **Monitoramento:**

- **Status do deploy**: GitHub repo > Actions tab
- **Logs**: Clique no workflow mais recente
- **URL ativa**: Settings > Pages

---

**🎯 Arquivo principal**: `saas_pricing_calculator_v3.html`  
**🔄 Deploy**: Automático via GitHub Actions  
**🌐 Hospedagem**: GitHub Pages (gratuito)
