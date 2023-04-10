// console.log("Hello World!");

const funcaoIMC = require("./moduloImc");

const calculadora = require("./moduloCalculadora");

const calcularTemp = require("./moduloConversores");

const autenticacaoLogin = require("./moduloLogin");

// Exermplo da aula

console.log(calculadora.soma(1, 1));
console.log(calculadora.subtrair(4, 1));
console.log(calculadora.multiplicacao(5, 5));
console.log(calculadora.divisao(100, 2));

// Exercício 1

console.log(funcaoIMC.Imc(76.1, 1.70));

// Exercício 2

console.log(calcularTemp.ConverterCF(32));
console.log(calcularTemp.ConverterFC(64));

// Exercício 3

console.log(autenticacaoLogin.autenticar("joao@test.com", "123abc"));