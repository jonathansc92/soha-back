## Descrição

Api desenvolvida em NodeJs + Express.

## Decisão da arquitetura utilizada

Neste projeto a ideia era separar as responsabilidades.
Na pasta src temos algumas estruturas de pastas.
- **controllers**: Nesta pasta há um controlador para os alunos, cuja responsabilidade é entregar as requisições da api;
- **routes**: Contém as rotas de chamadas para a api;
- **services**: Nesta pasta há os serviços responsáveis pela regra de negócio e retorno das requisições pela api, que são chamadas pelos controladores;
- **validations**: Esta camada é responsável pelas validações das requisições de salvar ou atualizar um aluno.

Na raiz da pasta src, há dois arquivos o app.js, importante arquivo que inclui as rotas.

Temos um arquivo para variáveis de ambiente **.env.example**, copie este arquivo e renomeie para **.env**.

O arquivo **server.js**, é neste arquivo que é incluído o **app.js**, responsáveis por iniciarem nossa aplicação.

**tests** - É dentro desta pasta que criamos nossos testes.

## Lista de bibliotecas de terceiros utilizadas

- express; 
- express-validation;
- dotenv; 
- cors;
- jest

## O que você melhoraria se tivesse mais tempo

- Refinaria e faria mais testes;

## Quais requisitos obrigatórios que não foram entregues

Neste repositório foram entregues todos os requisitos.

## Testes

Para executar os testes digite o comando:
```
    npm run test
```

## Como executar o projeto
- Na raiz do projeto renomeie o arquivo **.env.example** para **.env**;
- Execute o comando: 
```
    docker-compose up -d
```

- Link Back - [http://localhost:8080/]


- Autor - Jonathan Cruz
- Website - [https://jonathansc92.github.io/jonathancruzdev/?language=ptBr]

