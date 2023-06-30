# Minha experiencia no projeto

## As decisões que você tomou

Criei o projeto om o yarn, pois é a ferramenta mais rapida e comum para rodar a solução.
Desabilitei o SWC do nextjs e deixei somente o babel, pois o style component não e renderizado no servidor, então tive que usar a declarativa "use client" para conseguir rodar a aplicação, tenho consicencia que perdi um pouco de otimização com isso, porem no processo adicionei um loading para que o usuario não fique vendo a renderização na tela.
## Como você organizou seu código

A organização do projeto, se baseia no seguinte formato de arvore:

Para o git, adotei as nomenclaturas:

ADD - Adicionar
CHANGE - Alteração do código
UPDATE - Atualização do código
REMOVE - Removoção de algum código
FIX - ajuste de bug

## As funcionalidades e instruções de como rodar seu projeto

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
