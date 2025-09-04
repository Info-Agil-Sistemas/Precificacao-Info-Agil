# 🚀 Guia Rápido: Deploy no Vercel

## ✅ Checklist de Configuração

### Passo 1: Criar Projeto no Vercel
- [ ] Acesse [vercel.com](https://vercel.com)
- [ ] Faça login com GitHub
- [ ] Clique "New Project"
- [ ] Selecione repositório `Precificacao-Info-Agil`
- [ ] Framework: `Other`
- [ ] Build Command: deixe vazio
- [ ] Output Directory: `./`
- [ ] Clique "Deploy"

### Passo 2: Coletar Informações
Após criar o projeto, vá para Settings > General:

- [ ] **Project ID**: `prj_xxxxxxxxx`
- [ ] **Team/Org ID**: `team_xxxxxxx` 

### Passo 3: Criar Token
Em Vercel Settings > Tokens:

- [ ] Clique "Create Token"
- [ ] Nome: "GitHub Actions"
- [ ] Copie o token: `vercel_xxxxxxxxx`

### Passo 4: Configurar GitHub Secrets
No GitHub repo > Settings > Secrets and variables > Actions:

- [ ] `VERCEL_TOKEN` = `vercel_xxxxxxxxx`
- [ ] `PROJECT_ID` = `prj_xxxxxxxxx`
- [ ] `ORG_ID` = `team_xxxxxxx`

### Passo 5: Testar Deploy
- [ ] Faça um commit qualquer
- [ ] Push para branch `main`
- [ ] Verifique Actions tab no GitHub
- [ ] Acesse a URL do Vercel

## 🎯 URLs Importantes

- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Secrets**: https://github.com/Info-Agil-Sistemas/Precificacao-Info-Agil/settings/secrets/actions
- **Vercel Tokens**: https://vercel.com/account/tokens

## 📱 Contatos de Suporte

Se precisar de ajuda:
1. Verifique os logs no GitHub Actions
2. Consulte documentação: https://vercel.com/docs
3. Revise o arquivo `DEPLOY.md` para troubleshooting detalhado
