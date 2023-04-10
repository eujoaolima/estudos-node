const array = require("./usuarios");

function autenticar(email, senha) {
    const usuario = array.find(user => user.email === email && user.senha === senha);
    if (usuario) {
        console.log("Usuário compatível")
    } else {
        console.log("O usuário não foi encontrado")
    }
}

module.exports = { autenticar }