# Semana OmniStack 11: Be The Hero
Desenvolvimento de uma aplicação para conectar doadores/voluntários à ONGs. 

Projeto da Semana OmniStack da RocketSeat. 

**Tecnologias**: node && sqlite && reactjs && react native;

## Dia 1: Instalação das dependências

- [x] node && npm no [Debian/Ubuntu](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Versões utilizadas: npm 6.13.4,  node 12.14.1

## Dia 2: Backend com node.js && sqlite 
### Criando a base da aplicação
- [x] Configurar banco de dados
SQL Query Builder - [Knex] (http://knexjs.org/)

- [x] Instalar o Knex e o sqlite:

    npm install knex
    npm install sqlite3

- [x] Conectar ao database:

    npx knex init

- [x] Criar tabela ongs && incidentes:

    npx knex migrate: make create_ongs
    npx knex migrate:latest

    npx knex migrate: make create_incidentes
    npx knex migrate:latest

- [x] Contruir CRUD
- [x] Adicionar módulo CORS



#### Funcionalidades
- [x] Login da ONG
- [ ] Logout da ONG
- [x] Cadastrar ONG
- [x] Cadastrar Incidentes
- [x] Deletar Incidentes
- [x] Listar incidentes por ONG
- [ ] Entrar em contato com uma ONG

#### Rotas GET 
    localhost:3033/perfil - *Exibe perfil e incidentes da ONG*
    
    localhost:3033/ongs - *Lista todas as ONGs cadastradas*

    localhost:3033/incidentes - *Lista todos os incidentes cadastrados*

#### Rotas POST 
    localhost:3033/ongs - *Cadastra uma ONG*

    localhost:3033/login - *Login de uma ONG*

    localhost:3033/incidentes/ - *Cadastra um incidente*

#### Rotas DELETE 
    localhost:3033/incidentes/id - *Deleta um incidente pelo id*

## Dia 3: Frontend
### Construindo a interface web
- [x] SAVE THE DATE

## Dia 4: Mobile
### Desenvolvendo o app mobile
- [x] SAVE THE DATE

## Dia 5: Extras
### Funcionalidades avançadas
- [x] SAVE THE DATE
