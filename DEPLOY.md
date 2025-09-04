# Deploy no Vercel - InfoÁgil Precificação

## Configuração do Projeto

Este projeto está configurado para deploy automático no Vercel através do GitHub Actions.

### Arquivos de Configuração

- `vercel.json` - Configuração principal do Vercel
- `.github/workflows/vercel-deploy.yml` - GitHub Actions para deploy automático
- `package.json` - Configurações do projeto Node.js

### Setup Inicial

#### 1. **Conectar o repositório ao Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "New Project"
   - Selecione o repositório `Precificacao-Info-Agil`
   - Configure as seguintes opções:
     - Framework Preset: `Other`
     - Root Directory: `./` (raiz do projeto)
     - Build Command: Deixe vazio ou `echo "Static site"`
     - Output Directory: `./` (raiz do projeto)
   - Clique em "Deploy"

#### 2. **Obter IDs do Projeto (IMPORTANTE):**
   Após criar o projeto no Vercel:
   - No Dashboard do Vercel, vá para o projeto
   - Acesse Settings > General
   - Copie o **Project ID** (ex: `prj_abc123xyz`)
   - Na mesma página, copie o **Team ID** ou **Organization ID** (ex: `team_abc123`)

#### 3. **Obter Token de Acesso:**
   - No Vercel Dashboard, vá para Settings > Tokens
   - Clique em "Create Token"
   - Digite um nome (ex: "GitHub Actions")
   - Selecione o escopo desejado
   - Copie o token gerado (ex: `vercel_abc123xyz...`)

#### 4. **Configurar Secrets no GitHub:**
   - Vá para o repositório no GitHub
   - Acesse Settings > Secrets and variables > Actions
   - Clique em "New repository secret" e adicione:
     
     **VERCEL_TOKEN**
     ```
     vercel_abc123xyz... (seu token do passo 3)
     ```
     
     **PROJECT_ID**
     ```
     prj_abc123xyz (Project ID do passo 2)
     ```
     
     **ORG_ID**
     ```
     team_abc123 (Team/Organization ID do passo 2)
     ```

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

#### ❌ Erro: "No existing credentials found"
**Causa:** Faltam os secrets no GitHub ou estão incorretos.

**Solução:**
1. Verifique se os 3 secrets estão configurados no GitHub:
   - `VERCEL_TOKEN`
   - `PROJECT_ID` 
   - `ORG_ID`
2. Certifique-se que o token do Vercel está válido
3. Confirme que o Project ID e Organization ID estão corretos

#### ❌ Erro: "Project not found"
**Causa:** PROJECT_ID ou ORG_ID incorretos.

**Solução:**
1. No Vercel Dashboard, vá para Settings > General do seu projeto
2. Copie exatamente o Project ID mostrado
3. Copie o Team/Organization ID
4. Atualize os secrets no GitHub

#### ❌ Erro de Build
**Causa:** Configuração incorreta do projeto.

**Solução:**
1. No Vercel Dashboard, vá para Settings > General
2. Configure:
   - Framework Preset: `Other`
   - Build Command: Deixe vazio
   - Output Directory: `./`
   - Install Command: `npm install` (ou deixe vazio)

#### ❌ Página não carrega corretamente
**Causa:** Problema de roteamento.

**Solução:**
1. Verifique se o arquivo `vercel.json` está na raiz
2. Confirme que `saas_pricing_calculator_v3.html` existe
3. Teste o roteamento no Vercel Dashboard > Functions

### Monitoramento

- Logs de deploy: GitHub Actions tab no repositório
- Logs de runtime: Vercel Dashboard > Functions tab
- Analytics: Vercel Dashboard > Analytics tab
