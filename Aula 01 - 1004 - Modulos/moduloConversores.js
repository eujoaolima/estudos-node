function ConverterCF(C) {
    return (C * 1,8 + 32).toFixed(2);
}

function ConverterFC(F) {
    return ((F -32) / 1.8).toFixed(2);
}

module.exports = { ConverterFC, ConverterCF };