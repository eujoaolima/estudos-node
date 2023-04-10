// Módulo IMC
// Terá funcionalidades a respeito do cálculo;
// CommonJS

function imc(peso, altura) {
    return peso / altura ** 2;
}

module.exports = imc;