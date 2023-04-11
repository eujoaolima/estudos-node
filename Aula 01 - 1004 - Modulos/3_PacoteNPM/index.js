const CPF = require("cpf");

console.log(CPF.generate());

console.log(CPF.format("12345678910"));

console.log(CPF.isValid("12345867901"));

// Exercício 5

const fs = require("fs");
const gerarCpf = CPF.generate();

fs.writeFileSync("./listaCpf.txt", `${gerarCpf.repeat(10)}`);

const lista = fs.readFileSync("./listaCpf.txt");
console.log(lista.toString());
