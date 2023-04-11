const http = require("http");
const os = require("os");
const CPF = require("cpf");

const host = "localhost";
const porta = 3000;

const servidor = http.createServer((requisicao, resposta) => {
    resposta.write("Hello World! \n");
    resposta.write(`${os.type()} \n`)
    resposta.write(`${os.version()}\n`);
    resposta.write(`${os.platform()}\n`);
    resposta.write(`${CPF.generate()}`);
    resposta.end();
});

// Servidor fica esperando uma requisição
servidor.listen(porta, host);

/* EXERCÍCIO VI: Escreva na resposta do servidor informações sobre
 * o sistema usando o módulo os.
 * EXERCÍCIO VII: Instale o pacote cpf, e na resposta escreva
 * um cpf aleatório.
 * TEMPO = 17H00
 */


// SERVIDOR HTTP
// - Rotas
// - Codificação UTF-8
// - Estrutura mais clean/mais minimalista
// - Mais braçal

// Express.js = Framework para backend