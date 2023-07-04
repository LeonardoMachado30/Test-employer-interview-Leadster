# Minha experiencia no projeto

## As decisões que você tomou

Criei o projeto com o yarn, pois é a ferramenta mais rapida e comum para rodar a solução.

O Projeto segue os padrões estabelecidos pelo teste, utilizando NextJs na versão 13, juntamente com style components, seguindo padrões de projeto como clean code, tipagem forte e organização de componentes.


Desabilitei o SWC do nextjs e deixei somente o babel, pois o style component não e renderizado no servidor, então tive que usar a declarativa "use client" em alguns components.

Devido a falta de qualquer mecanismo de UX/UI, estipulando o padrão, alinhamento e espaçamento, como o figma, optei por recortar a imagem que me foi passada do layout, pois, além de estar em full hd, iria ser mais fiel e mais rápido do que criar do zero, então o local do site onde tem as descrições "Menos conversinha, mais conversão" é a imagem do teste, só que recortada.

Devido a algumas imagens não estarem no projeto, criei manualmente atravez do gimp e do figma, de modo a otimizar a aplicação e tornar as imagens de melhor manipulação.

Utilizei mais do tailwind css para implementar o estilo, pois o style components em excesso deixa o projeto "sujo" no meu ponto de vista.

Ao decorrer do desenvolvimento, levei cerca de 4 dias e 16 horas para desenvolver a tela, com interatividade e animações, de modo que respeitasse as regras estipuladas pelo teste

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
