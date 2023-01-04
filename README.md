# Cashforce Fullstack

# Sumário

- [Descrição](#descrição)
- [Como rodar o projeto](#como-rodar-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Passo a passo](#passo-a-passo)
- [Documentação da API](#documentação-da-api)
- [Aspectos Técnicos](#aspectos-técnicos)
  - [• Geral](#•-geral)
  - [• Frontend](#•-frontend)
  - [• Backend](#•-backend)
- [Como rodar os testes automatizados](#como-rodar-os-testes-automatizados)
  - [Frontend](#frontend)
  - [Backend](#backend)

# Descrição

  A aplicação Fullstack simula um sistema da Cashforce onde é possível o cliente visualizar todas as suas notas fiscais, contendo informações como: número da nota, data de emissão, valor total, status da nota e etc.

# Como rodar o projeto

## Pré-requisitos

- [Docker 🐳 ](https://docs.docker.com/get-docker/)
- [Docker Compose 🐙](https://docs.docker.com/compose/install/)
- [Git 🐙🐈‍⬛](https://git-scm.com/downloads)

## Passo a passo

1. Clone o repositório

  ```bash
  git clone git@github.com:Brendon-Lopes/fullstack-cashforce.git
  ```

2. Entre na pasta do projeto

  ```bash
  cd fullstack-cashforce
  ```

3. Inicie o projeto com o docker-compose

  ```bash
  docker-compose up -d
  ```

5. Acesse o app em [http://localhost:5173](http://localhost:5173)
  - Pode demorar alguns minutos para iniciar, pois o docker leva um tempo para baixar as imagens e instalar as dependências.

# Documentação da API

### A documentação da API pode ser acessada no link abaixo:

- [http://localhost:3001/api-docs](http://localhost:3001/api-docs/)
  - É necessário que o projeto esteja rodando para acessar a documentação.

# Aspectos Técnicos

## • Geral

  O projeto foi feito utilizando tecnologias do ecossistema JavaScript.

  Todo o projeto contém testes unitários e end to end, tanto no frontend quanto no backend.

  Todo o código foi feito tendo em mente boas práticas de desenvolvimento, como Clean Code e SOLID, para facilitar a manutenção e organização do projeto.

  Foi utilizado o eslint para manter o padrão de código.

  O docker e docker-compose foram utilizados para facilitar a configuração do ambiente de desenvolvimento.

## • Frontend
  O Frontend foi desenvolvido em Vue.js (V3) + TypeScript.

  A estilização foi feita com CSS puro.

  As integração com a API foi feita utilizando Axios.

  Os testes unitários foram feitos utilizando Vitest. E os testes end to end usando Cypress.

  Para mais informações sobre como rodar os testes, ver a seção de [testes](#como-rodar-os-testes-automatizados).

## • Backend
  O Backend foi feito utilizando Node.js + TypeScript + Express. O banco de dados utilizado foi o MySQL, usando Sequelize (sequelize-typescript) como ORM.

  O código foi desenvolvido utilizando um padrão de POO, com o uso de classes e interfaces, seguindo os princípios de SOLID.

  A criação e população do banco de dados foi feita utilizando uma query SQL, que pode ser encontrada no arquivo econtrado em `server/src/database/queries/createDatabase.sql` (query disponibilizada pela equipe do Cashforce, com algumas pequenas alterações)

  Os testes unitários foram feitos utilizando Mocha, Chai e Sinon. E os testes end to end usando Mocha, Chai, Sinon e chai-http.

  Foi utilizado também um banco de dados em memória para rodar os testes de forma mais confiável. Utilizar boas práticas do SOLID fez bastante diferença nessa etapa, já que a classe de Repository espera que o banco de dados seja passado em seu construtor, facilitando a troca de banco de dados.

  Para mais informações sobre como rodar os testes, ver a seção de [testes](#como-rodar-os-testes-automatizados).

# Como rodar os testes automatizados

## Frontend

  Para rodar os testes unitários do frontend, basta entrar na pasta `client` e seguir os seguintes passos:

  1. Instalar as dependências localmente
  ```bash
  npm install
  ```

  2. Para rodar os testes unitários
  ```bash
  npm test
  ```

  3. Para rodar os testes end to end. <strong>(OBS.: É necessário que o projeto esteja rodando, para que o Cypress consiga acessar a aplicação)</strong>
  ```bash
  npm run test:e2e
  ```

## Backend

  Para rodar os testes unitários do backend, basta entrar na pasta `server` e seguir os seguintes passos:

  1. Instalar as dependências localmente
  ```bash
  npm install
  ```

  2. Para rodar os testes unitários
  ```bash
  npm test
  ```

  3. Para rodar os testss end to end. <strong>(OBS.: É necessário que o projeto esteja rodando, para que o chai-http consiga acessar a aplicação)</strong>
  ```bash
  npm run test:e2e
  ```

