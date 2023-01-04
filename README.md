# Cashforce Fullstack

# Sumário

- [Descrição](#descrição)
- [Deploy](#deploy)
- [Como rodar o projeto localmente](#como-rodar-o-projeto-localmente)
  - [Pré-requisitos](#pré-requisitos)
  - [Passo a passo](#passo-a-passo)
- [Documentação da API](#documentação-da-api)
- [Aspectos Técnicos](#aspectos-técnicos)
  - [Geral](#•-geral)
  - [Frontend](#•-frontend)
  - [Backend](#•-backend)
- [Como rodar os testes automatizados](#como-rodar-os-testes-automatizados)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Considerações Finais](#considerações-finais)

# Descrição

  A aplicação Fullstack simula um sistema da Cashforce onde é possível o cliente visualizar todas as suas notas fiscais, contendo informações como: número da nota, data de emissão, valor total, status da nota e etc.

<img src="./client/src/assets/demo.gif" width="720" alt="Demonstração da estilização e responsividade do frontend" />

# Deploy

  ### O deploy do projeto foi realizado no Railway e pode ser acessado no link abaixo:

  - [https://cashforce-front.up.railway.app/](https://cashforce-front.up.railway.app/)
    - Pode estar offline dependendo da disponibilidade do plano gratuito do Railway.

# Como rodar o projeto localmente

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

### A documentação da API pode ser acessada nos links abaixo:

- <i>Deploy: </i>[https://api-cashforce.up.railway.app/api-docs/](https://api-cashforce.up.railway.app/api-docs/)

- <i>Local: </i>[http://localhost:3001/api-docs](http://localhost:3001/api-docs/)

# Aspectos Técnicos

## • Geral
  O projeto foi feito utilizando tecnologias do ecossistema JavaScript.

  Todo o projeto contém testes unitários e end to end, tanto no frontend quanto no backend.

  Todo o código foi feito tendo em mente boas práticas de desenvolvimento, como Clean Code e SOLID, para facilitar a manutenção e organização do projeto.

  Os commits foram feitos seguindo o padrão de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

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

# Considerações finais
Apesar de ter experiência desenvolvendo algumas aplicações Fullstack, esse foi o meu primeiro contato com Vue.js (usava React.js), foi uma ótima oportunidade de aprendizado e me ajudou a conhecer melhor o framework, que inclusive gostei bastante de usar! Apesar de alguns pontos que necessitaram de uma pequena curva de aprendizado (como especifidades do framework), foi uma experiência de desenvolvimento bem fluida, principalmente por conta da documentação bem completa do Vue.

O desenvolvimento do Backend foi bem tranquilo, já que é o que eu mais pratico e mais gosto no geral. Me desafiei a fazer os testes com um banco de dados em memória ao invés de apenas mockar os dados como estava acostumado. Eu já tinha utilizado Sequelize em projetos com JS puro, mas nunca de uma forma muito fluida em TypeScript, foi uma ótima oportunidade de conhecer a biblioteca sequelize-typescript (indicada na própria documentação do sequelize), ajudou bastante durante o desenvolvimento.

Apesar de não ser proposto no desafio, fiz o deploy da aplicação completa no Railway. Foi um desafio bem interessante, principalmente por precisar adaptar o código pra ambientes diferentes (desenvolvimento e produção). O docker e o docker-compose ajudaram demais nesse quesito!

Por fim, gostaria de agradecer a oportunidade de participar desse processo seletivo, foi uma experiência muito boa e aprendi bastante! Espero que gostem do resultado final!

