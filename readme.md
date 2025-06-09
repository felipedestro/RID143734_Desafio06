<h1 align="center"> Produtos Digitais </h1>

<p align="center">
  <a href="#desafio-desenvolva-uma-api-e-integre-ao-front-end-de-uma-aplicação">Desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#documetação-da-api">Documentação da API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#estrutura-do-projeto">Estrutura do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#executando-o-projeto">Excutando o Projeto</a>&nbsp;&nbsp;&nbsp;
</p>

## Desafio: Integração e modelagem de dados de um produto digital

> [!TIP]
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

## Documetação da API

#### Clientes (customers)

```http
GET /customers
```
```http
GET /customers/{id}
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `id`      | `string` | ✅ | O ID cliente que desja buscar |

```http
GET /customers/search?name=NOME
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `name`      | `string` | ✅ | O nome que deseja buscar |

```http
POST /customers/
```
| Dados   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `nameCustomer`      | `string` | ✅ | O nome do cliente |
| `emailCustomer`     | `string` | ✅ | Email do cliente |
| `phoneCustomer`     | `string` | ❌ | Telefone do cliente |

```http
PATCH /customers/{id}
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `id`      | `string` | ✅ | O ID cliente que desja alterar |

| Dados   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `nameCustomer`      | `string` | ❌ | O novo Nome do cliente |
| `emailCustomer`     | `string` | ❌ | O novo Email do cliente |
| `phoneCustomer`     | `string` | ❌ | O novo Telefone do cliente |

**Os dados para alterar algo relativo ao cliente são opcional, ou seja, coloque apenas o dado que realmente desja alterar.**

```http
DELETE /customers/{id}
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `id`      | `string` | ✅ | O ID cliente que deseja deletar |

#### Produtos (products)

```http
GET /products
```
```http
GET /products/{id}
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `id`      | `string` | ✅ | O ID produto que deseja buscar |

```http
GET /customers/search?name=NOME
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `name`      | `string` | ✅ | O nome que deseja buscar |

```http
POST /products
```
| Dados   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `nameProduct `      | `string` | ✅ | O nome do produto |
| `descriptionProduct`     | `string` | ✅ | descrição sobre o produto |
| `priceProduct`     | `Decimal` | ✅ | preço unitário sobre o produto |


```http
PATCH /products/{id}
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `id`      | `string` | ✅ | O ID do produto que deseja alterar |

| Dados   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `nameProduct `      | `string` | ❌ | O nome do produto |
| `descriptionProduct`     | `string` | ❌ | descrição sobre o produto |
| `priceProduct`     | `Decimal` | ❌ | preço unitário sobre o produto |

**Os dados para alterar algo relativo ao produto são opcional, ou seja, coloque apenas o dado que realmente desja alterar.**

```http
DELETE /products/{id}
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `id`      | `string` | ✅ | O ID produto que deseja deletar |

#### Estoque (stocks)

```http
GET /stocks
```
```http
GET /stocks/{id}
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `id`      | `string` | ❌ | O ID do estoque que deseja buscar |

```http
GET /stocks/product/search?name=NOME
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `name`      | `string` | ✅ | O nome produto que deseja buscar |

```http
GET /stocks/product/{id}
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `id`      | `string` | ❌ | O ID do produto que deseja buscar |


```http
POST /stocks
```
| Dados   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `productId `      | `string` | ✅ | o ID do produto que deseja adicionar ao estoque |
| `quantityStock`     | `Integer` | ✅ | descrição sobre o produto |


```http
PATCH /stocks/{id}
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `id`      | `string` | ✅ | O ID do produto que deseja alterar |

| Dados   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `productId `      | `string` | ❌ | O nome do produto |
| `quantityStock`     | `integer` | ❌ | quantidades de items |

**Os dados para alterar algo relativo ao estoque são opcional, ou seja, coloque apenas o dado que realmente desja alterar.**

```http
DELETE /stocks/{id}
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `id`      | `string` | ✅ | O ID estoque que deseja deletar |

#### Pedidos (Orders / OrderItem)

```http
GET /orders
```
```http
GET /orders/{id}
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `id`      | `string` | ✅ | O ID do pedido que deseja buscar |


```http
GET /orders/customer/{id}
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `id`      | `string` | ✅ | O ID do cliente  que deseja localizar os pedidos |

```http
GET /orders/customer?name=NOME
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `name`      | `string` | ✅ | O nome cliente que deseja localizar os pedidos |


```http
POST /orders
```
| Dados   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `customerId `      | `string` | ✅ | o ID do cliente que deseja criar o pedido |
| `items`     | `array` | ✅ | items que serão cadastrado no pedido |

```json
"items": [
    {
        "productId": "a2a7267d-0728-4a51-8199-1a68a9ad7203",
        "quantity": 1
    }
   ]
```


```http
PATCH /orders/{id}
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `id`      | `string` | ✅ | O ID do pedido que deseja alterar |

| Dados   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `customerId `      | `string` | ❌ | o ID do cliente que deseja criar o pedido |
| `items`     | `array` | ❌ | items que serão cadastrado no pedido |

_Exemplo de array de items_
```json
"items": [
    {
        "productId": "123",
        "quantity": 20
    }
   ]
```

**Os dados para alterar algo relativo ao estoque são opcional, ou seja, coloque apenas o dado que realmente desja alterar.**

```http
DELETE /orders/{id}
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `id`      | `string` | ✅ | O ID do pedido que deseja deletar |

#### Vendas (Sales)

```http
GET /sales
```

```http
GET /sales/customer/{id}
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `id`      | `string` | ✅ | O ID do cliente  que deseja localizar os pedidos |

```http
GET /sales/customer?name=NOME
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `name`      | `string` | ✅ | O nome cliente que deseja localizar os pedidos |


```http
POST /sales
```
| Dados   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `orderId `      | `string` | ✅ | o ID do pedido que deseja criar a venda |

```http
DELETE /sales/{id}
```
| Parâmetro   | Tipo       | Obrigatório | Descrição                     |
| :---------- | :--------- | :-----------| :------------------------------- |
| `id`      | `string` | ✅ | O ID da venda que deseja deletar |

## Estrutura do projeto

- `./src/` - Arquivos e pastas de configuração do servidor API

- `./src/controller/` - Todos os controles da API, onde captura os dados necessários e envia ao serviço de CRUD do Prisma ORM.

- `./src/services/` - Todos os serviços a serem executados na API.

- `./src/routes/` - Rotas configurada para execução da API.

## Executando o Projeto

Certifique-se de quem todos requisitos necessários para execução do projeto de forma local.

#### Setup ambiente

- [Node LTS](https://nodejs.org/en)
  - `node -v` - Verifique se tem o Node instalado na máquina

#### Siga os passos abaixo:

- Clone o projeto:
  `git clone https://github.com/felipedestro/RID143734_Desafio06`

* Acesse o diretorio
  `cd RID143734_Desafio06`

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
