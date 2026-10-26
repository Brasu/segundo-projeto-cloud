const express = require("express");
const app = express();

app.get('/', (request, response) => {
  response.send(`
    <html>
      <head>
        <title>Principal</title>
        <style>
          body { font-family: Comic sans ms, sans-serif; margin: 40px; }
          h1 { color: #0066cc; }
          p { margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <h1>Bem vindo ao meu site!</h1>
        <p>Outras rotas: <a href="/search">Busca</a> | <a href="/users/">Usuários</a> | <a href="/contact">Contato</a></p>
      </body>
    </html>
  `);
});

app.get('/contact', (request, response) =>{
  response.send(`
    <title>Contato</title>
    <style>
          body { font-family: Comic sans ms, sans-serif; margin: 40px; }
          p { margin-bottom: 20px; }
    </style>
    <h2>Contatos</h2>
    <p>Email: ana@email.com</p>
    <p>Telefone: 4002-8922</p>
    `);
});

app.get('/search', (request, response) => {
  const { q, categoria, limite } = request.query;
  
  response.send(`
    <title>Consulta</title>
    <style>
          body { font-family: Comic sans ms, sans-serif; margin: 40px; }
          p { margin-bottom: 20px; }
    </style>
    <h2>Resultados da consulta</h2>
    <p>Query: ${q || 'Não especificado'}</p>
    <p>Categoria: ${categoria || 'Todas categorias'}</p>
    <p>Limite: ${limite || 'Default'}</p>
  `);
});

app.get('/users/{:userId}', (request, response) => {
  response.send(`
    <title>Usuário</title>
    <style>
          body { font-family: Comic sans ms, sans-serif; margin: 40px; }
          p { margin-bottom: 20px; }
    </style>
    <h2>Informação do usuário</h2>
    <p>User ID: ${request.params.userId}</p>
  `);
});


app.listen(4000, function(erro){
    if(erro) {
        console.log("Erro ao Iniciar.");
    } else {
        console.log("Servidor Iniciado! Acesso em localhost:4000!")
    }
});
