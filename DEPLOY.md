# Deploy no Vercel - InfoÁgil Precificação

## Configuração do Projeto

Este projeto está configurado para deploy automático no Vercel através do GitHub Actions.

### Arquivos de Configuração

- `vercel.json` - Configuração principal do Vercel
- `.github/workflows/vercel-deploy.yml` - GitHub Actions para deploy automático
- `package.json` - Configurações do projeto Node.js

### Setup Inicial

1. **Conectar o repositório ao Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "New Project"
   - Selecione o repositório `Precificacao-Info-Agil`
   - Configure as seguintes opções:
     - Framework Preset: `Other`
     - Root Directory: `./` (raiz do projeto)
     - Build Command: `echo "Static site - no build needed"`
     - Output Directory: `./` (raiz do projeto)

2. **Configurar Secrets no GitHub:**
   - Vá para Settings > Secrets and variables > Actions no repositório GitHub
   - Adicione o secret: `VERCEL_TOKEN`
   - Para obter o token:
     - Vá para Vercel Dashboard > Settings > Tokens
     - Crie um novo token
     - Copie e cole no GitHub Secret

3. **Configurar Variáveis de Ambiente no Vercel:**
   - No dashboard do Vercel, vá para o projeto
   - Acesse Settings > Environment Variables
   - Adicione as variáveis necessárias (se houver)

### Processo de Deploy

O deploy acontece automaticamente quando:
- Há push para a branch `main`
- Há pull request para a branch `main`

### URL de Acesso

Após o deploy, a aplicação estará disponível em:
- URL principal: `https://seu-projeto.vercel.app/`
- Redirecionamento: `/` → `/saas_pricing_calculator_v3.html`

### Estrutura do Projeto

```
/
├── saas_pricing_calculator_v3.html    # Arquivo principal da aplicação
├── index.html                         # Versão modular (desenvolvimento)
├── css/                              # Arquivos CSS modulares
├── js/                               # Arquivos JavaScript modulares
├── vercel.json                       # Configuração do Vercel
├── package.json                      # Configuração do Node.js
├── .vercelignore                     # Arquivos ignorados no deploy
└── .github/workflows/                # GitHub Actions
    └── vercel-deploy.yml             # Workflow de deploy

```

### Comandos Úteis

```bash
# Instalar Vercel CLI localmente
npm install -g vercel

# Login no Vercel
vercel login

# Deploy manual (desenvolvimento)
vercel

# Deploy para produção
vercel --prod

# Executar localmente
vercel dev
```

### Troubleshooting

#### Erro de Token
Se o deploy falhar por erro de token:
1. Verifique se o `VERCEL_TOKEN` está configurado no GitHub Secrets
2. Gere um novo token no Vercel se necessário

#### Erro de Build
Se houver erro de build:
1. O projeto é estático, não precisa de build complexo
2. Verifique se todos os arquivos estão commitados no Git

#### Problema de Roteamento
Se a página não carregar corretamente:
1. Verifique o arquivo `vercel.json`
2. Confirme que o `saas_pricing_calculator_v3.html` existe na raiz

### Monitoramento

- Logs de deploy: GitHub Actions tab no repositório
- Logs de runtime: Vercel Dashboard > Functions tab
- Analytics: Vercel Dashboard > Analytics tab
