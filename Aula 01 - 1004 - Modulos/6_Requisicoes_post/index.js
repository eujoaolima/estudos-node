// Configurações do app

const express = require("express");

const app = express();

app.use(express.json());

// Rotas

app.post("/enviar", (req, res) => {
    // req.body representa os dados enviados no corpo da requisição POST
    const { nome, email, senha, frutasFavoritas } = req.body;
    res.json(`Recebido: ${nome}, ${email}, ${senha}, ${frutasFavoritas}`);
}); 

// IMC/Calcular
app.post("/imc", (req, res) => {
    const { peso, altura } = req.body;

    if (peso !== undefined && altura !== undefined) {
        const imc = peso / altura ** 2;
        res.json({ resultado: imc });
    } else {
        res.status(400).json({ message: "Dados inválidos para calcular" });
    }
});

// Escuta

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});