<h1 align="center"> Produtos Digitais </h1>

<p align="center">
  <a href="#desafio-desenvolva-uma-api-e-integre-ao-front-end-de-uma-aplicação">Desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#estrutura-do-projeto">Estrutura do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#executando-o-projeto">Excutando o Projeto</a>&nbsp;&nbsp;&nbsp;
</p>

## Desafio: Desenvolva uma API e integre ao front-end de uma aplicação

> [!TIP]
> Desafio: Integração e modelagem de dados de um produto digital
>
>A empresa DNCommerce é loja online que vende produtos de beleza e está procurando um novo sistema de gerenciamento de estoque e pedidos. O sistema deve ser capaz de realizar o cadastro de produtos e o registro de vendas de forma eficiente, através do desenvolvimento de APIs e integração de sistemas, criando uma solução simples e eficiente para o gerenciamento da loja. Ela precise que você estruture o back-end e modele o banco de dados da aplicação!

## Tecnologias

<p align="left">
  <img src='https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white'/>
  <img src='https://img.shields.io/badge/tsnode-3178C6.svg?style=for-the-badge&logo=ts-node&logoColor=white'/>
  <img src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'/>
  <img src='https://img.shields.io/badge/.ENV-ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=black'/>
  <img src='https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white'/> 
  <img src='https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white'/>
  
  
</p>

## Estrutura do projeto

- `./src/` - Arquivos e pastas de configuração do servidor API

- `./src/controller/` - Todos os controles da API, onde captura os dados necessários e envia ao serviço de CRUD do Prisma ORM.

- `./src/services/` - Todos os serviços a serem executados na API.

- `./src/route.ts` - Rotas configurada para execução da API.

## Executando o Projeto

Certifique-se de quem todos requisitos necessários para execução do projeto de forma local.

#### Setup ambiente

- [Node LTS](https://nodejs.org/en)
  - `node -v` - Verifique se tem o Node instalado na máquina

#### Siga os passos abaixo:

- Clone o projeto:
  `git clone https://github.com/felipedestro/backend-libary.git`

* Acesse o diretorio
  `cd`

- Instale as dependências
  `npm install` ou `npm i`

##### Crie a variável de ambiente:

- Crie o arquivo `.env`:
  Siga o arquivo `.env.example` e insira a variávle `PORT` e a variável `DATABASE_URL`
  - `PORT` - Padrão `3000`
  - `DATABASE_URL` - `mysql://<USER>:<PASSWORD>@localhost:3306/libary`
    - `USERNAME`: Nome do usuário do banco.
    - `PASSWORD`: Senha do usuário do banco de dados.

* Execute o Prisma ORM para criar o Database e Tabela necessários
  `npx prisma db push`

- Gere o Prisma Client
  `npx prisma generate`

* Inicie o servidor
  `npm run start`

---

<p align="center">
  Feito por Felipe Destro 👋 <a href="https://github.com/felipedestro">Conheça meus projetos!</a>
</p>
