# LP — A Única Saída é Pra Dentro

Landing page estática pronta para abrir no VS Code e publicar na Vercel.

## Arquivos
- `index.html`
- `styles.css`
- `script.js`
- `assets/` — fotos usadas na página

## Como abrir no VS Code
1. Extraia a pasta.
2. Abra a pasta no VS Code.
3. Abra `index.html` no navegador.
4. Se tiver a extensão Live Server, clique em **Go Live**.

## Como adicionar o checkout da Kiwify
Abra `script.js` e altere:

```js
const CHECKOUT_URL = "";
```

para:

```js
const CHECKOUT_URL = "COLE_AQUI_O_LINK_DA_KIWIFY";
```

## Subir pelo terminal

### 1. Criar o repositório local
```bash
git init
git add .
git commit -m "LP A Unica Saida e Pra Dentro"
```

### 2. Conectar ao GitHub
Crie um repositório vazio no GitHub e depois rode:

```bash
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

### 3. Publicar na Vercel
No terminal:

```bash
npm i -g vercel
vercel
```

Na primeira publicação, responda às perguntas da Vercel e depois use:

```bash
vercel --prod
```

## Observação sobre a ancoragem de R$ 600
A seção de valor foi escrita como "Referência de 1 aula individual — R$ 600".
Se esse valor for uma afirmação sobre uma aula individual real da Naiara, confirme antes de publicar.
