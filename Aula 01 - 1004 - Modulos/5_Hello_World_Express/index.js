const express = require("express");
const fs = require("fs");
const CPF = require("cpf");

const calcImc = require("./calculadoraImc");

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
    const arquivo = fs.readFileSync("../5_HelloWorld Express/exercicios/inicio.html");
    resposta.send(arquivo.toString());
});

app.get("/ajuda", (requisicao, resposta) => {
    const arquivo = fs.readFileSync("../5_HelloWorld Express/exercicios/ajuda.html");
    resposta.send(arquivo.toString());
});

// Parâmetro de caminho/rota
app.get("/funcionarios/:cpf", (req, res) => {
    // req.params = guarda todos os parametros de rota
    // const cpf = req.params.cpf;
    const { cpf } = req.params;

    cpf.isValid

    res.send(`Funcionário encontrado: ${cpf}`);
});

app.get("/pessoas/:nome/:empresa", (req, res) => {
// const nome = req.params.nome;
// const empresa = req.params.empresa;
const { nome, empresa } = req.params;
res.send(`${nome} e ${empresa}`);
});

// Exercício 1 - Params
app.get("/calculadora/:peso/:altura", (req, res) => {
    const { peso, altura } = req.params;
    const imc = calcImc(Number(peso), Number(altura));
    res.send(`Seu peso é ${peso} e sua altura é ${altura}, portanto seu IMC é de ${imc}`);
});


// Exercício 2 - Params

app.get("/funcionarios/:cpf", (req, res) => {
    // req.params = guarda todos os parametros de rota
    // const cpf = req.params.cpf;
    const { cpf } = req.params;

    if (CPF.isValid(cpf)) {
        // Por padrão status é 200
        res.send("O cpf é válido!");
    } else {
        // 400 = quando o cliente manda informação
        // inválida
        res.status(400).send("O cpf é inválido!");
    }
});

// Exercício 3 - Params

app.get("/cpfs/:numero", (req, res) => {
    const numero = Number(req.params.numero);

    for (let i = 0; i < numero; i++) {
        res.write(`<p>${CPF.generate()}</p>`);
    }

    res.end();
});

// Query // consulta
app.get("/youtube", (req, res) => {
    // const canal = req.query.canal;
    const { canal, video, r } = req.query;
    res.send(`Canal: ${canal}. Vídeo: ${video}. Res: ${r}`);
});

// Exercício 1 - Query
app.get("/nome", (req, res) => {
    const { nome } = req.query;

    if (nome) {
        // truthy values
        res.send(`Olá, ${nome}!`);
    } else {
        res.status(400).send("Envie o nome corretamente!");
    }
});

// Exercício 2 - Query

app.get("/soma", (req, res) => {
    const { num1, num2 } = req.query;
    // Checa se os valores foram fornecidos
    if (num1 !== undefined && num2 !== undefined) {
        const soma = Number(num1) + Number(num2);
        res.send(`A soma é: ${soma}`);
    } else {
        res.status(400).send("Forneça dois números válidos");
    }
});

// Exercício 3 - Query

app.get("/boasvindas", (req, res) => {
    const { lang } = req.query;

    if (lang === "pt") {
        res.send("Bem-vindo!");
    } else if (lang === "en") {
        res.send("Welcome!");
    } else {
        res.status(400).send("Idioma não suportado!");
    }
});

// Inicializa a escuta de requisições do servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});