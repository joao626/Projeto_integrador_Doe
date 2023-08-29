const express = require('express') // Importa o módulo express, que é um framework para criar aplicativos web em Node.js
const app = express() // Inicializa uma instância do aplicativo Express
const path = require('path');// Importa o módulo path que lida com manipulações de caminho de arquivo.

const bodyParser = require('body-parser') // para analisar dados do corpo das requisições. Isso é útil 
// para extrair os dados enviados por formulários HTML POST

app.use(bodyParser.urlencoded({ extended: true})) // Configura o middleware

app.post('/usuarios', (req, res, next) => { //Define um manipulador para a rota POST '/usuarios'. Quando uma requisição POST é feita para essa rota, o código dentro desta função é executado
    console.log(req.body)//Imprime no console o corpo da requisição. Como o middleware body-parser foi configurado, req.body conterá os dados enviados no corpo da requisição POST
    res.send('<h1>Sucesso !</h1>')// Envia uma resposta HTML para o cliente com o título "Sucesso !"
    
})

app.listen(3003)//Inicia o servidor Express e faz com que ele escute na porta 3003. Isso significa que o servidor estará disponível para receber requisições HTTP nessa porta