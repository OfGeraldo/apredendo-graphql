# Documentação

## 1. Configurando ambiente

1.1 Instalando os comandos

Rodar: npm i express express-graphql  graphql graphql-tools knex mysql --save

1.2 Instalando o comando Knex

Rodar: npm i -g knex

1.3 Iniciando o Knex

Rodar: 'knex init', na pasta src

## 2. Criando migrações

2.1 Criar migração

Rodar: knex migrate:make create_table_users

2.2 Rodar as migrações

Rodar: knex migrate:latest

## 3. Criar o resolvers

## 4. Criar o schema

## 5. Rodar o server

5.1 Iniciando o servidor

Rodar: node server.js