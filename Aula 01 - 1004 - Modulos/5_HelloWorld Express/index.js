const express = require("express");
const fs = require("fs");

// Define uma aplicação backend em Express
// Recursos pré-configurados
const app = express();

// Define um roteamento
// Manipulador de rota
app.get("/", (requisicao, resposta) => {
    resposta.send("<h2>Hello, World! É top!</h2>");
});

app.get("/teste", (requisicao, resposta) => {
    resposta.send("<p>Potato</p>");
});

app.get("/inicio", (requisicao, resposta) => {
    const arquivo = fs.readFileSync("./inicio.html");
    resposta.send(arquivo.toString());
});

app.get("/ajuda", (requisicao, resposta) => {
    const arquivo = fs.readFileSync("./ajuda.html");
    resposta.send(arquivo.toString());
});

// Inicializa a escuta de requisições do servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});
