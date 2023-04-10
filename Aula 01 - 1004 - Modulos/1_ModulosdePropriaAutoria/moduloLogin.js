const array = require("./usuarios");

function autenticar(email, senha) {
    const usuario = array.find(user => user.email === email && user.senha === senha);
    if (usuario) {
        return "Usuário compatível";
    } else {
        return "O usuário não foi encontrado";
    }
}

module.exports = { autenticar }