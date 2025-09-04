# 🚀 Guia Rápido: Deploy no Vercel

## ⚡ Deploy Imediato (Primeira Vez)

### 🎯 **Passo 1: Deploy Manual (OBRIGATÓRIO na primeira vez)**
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique **"New Project"**
4. Selecione repositório **`Precificacao-Info-Agil`**
5. Configure:
   - **Framework Preset**: `Other`
   - **Root Directory**: `./` (deixe padrão)
   - **Build Command**: deixe vazio OU `echo "Static"`
   - **Output Directory**: `./` (deixe padrão)
6. Clique **"Deploy"** 
7. ✅ **Pronto!** Sua aplicação estará no ar

> 📋 **Arquivo Principal**: `saas_pricing_calculator_v3.html`

---

## 🔄 Deploy Automático (Opcional)

Para deploys automáticos nos próximos commits:

### **Passo 2: Coletar Informações**
Após o primeiro deploy, no Vercel Dashboard:
- Vá para **Settings > General** do seu projeto
- Anote o **Project ID**: `prj_xxxxxxxxx`
- Anote o **Team/Org ID**: `team_xxxxxxx` 

### **Passo 3: Criar Token**
- Vá para **Vercel Settings > Tokens**
- Clique **"Create Token"**
- Nome: `GitHub Actions`
- Copie o token: `vercel_xxxxxxxxx`

### **Passo 4: Configurar GitHub Secrets**
No GitHub: **repo > Settings > Secrets and variables > Actions**

Adicione estes 3 secrets:
- `VERCEL_TOKEN` = `vercel_xxxxxxxxx`
- `PROJECT_ID` = `prj_xxxxxxxxx`  
- `ORG_ID` = `team_xxxxxxx`

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
