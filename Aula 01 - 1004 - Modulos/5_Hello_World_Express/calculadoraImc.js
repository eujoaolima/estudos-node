function calcImc (peso, altura) {
    return (peso / altura ** 2);
}

calcImc(80, 1.78);

module.exports = calcImc;