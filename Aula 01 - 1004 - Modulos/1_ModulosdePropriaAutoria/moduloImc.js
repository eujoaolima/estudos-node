// Módulo IMC
// Terá funcionalidades a respeito do cálculo;
// CommonJS

function Imc(peso, altura) {
    return (peso / altura ** 2).toFixed(2);
}

function statusImc(imc) {
    if (imc <= 16.9) {
        return `Seu imc é de ${imc}, o que é muito abaixo do normal!`;
    } else if (imc >=17 && imc <=18.4) {
        return `Seu imc é de ${imc}, o que é abaixo do normal!`;
    } else if (imc >=18.5 && imc <=24.9) {
        return `Seu imc é de ${imc}, o que é normal!`;
    } else if (imc >=25 && imc <=29.9) {
        return `Seu imc é de ${imc}, o que é acima do normal!`;
    } else if (imc >=30 && imc <=34.9) {
        return `Seu imc é de ${imc}, o que é obesidade I!`;
    } else if (imc >=35 && imc <=39.9) {
        return `Seu imc é de ${imc}, o que é obesidade II!`;
    } else {
        return `Seu imc é de ${imc}, o que é obesidade III!`;
    }
}

module.exports = { Imc, statusImc };
