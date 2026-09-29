const { userDB } = require('../config/database');

function usuarioExiste(email, senha, database = userDB) {
    // Retorna false se e-mail ou senha forem undefined, null ou vazios
    if (!email || senha === undefined || senha === null) return false;
    if (!database || !Array.isArray(database.usuarios)) return false;

    return database.usuarios.some(user => 
        user.email && 
        user.email.toLowerCase() === email.toLowerCase() && 
        String(user.senha) === String(senha)
    );
}

function emailExiste(email, database = userDB) {
    // Retorna false se o e-mail for undefined, null ou string vazia
    if (!email) return false;
    if (!database || !Array.isArray(database.usuarios)) return false;

    return database.usuarios.some(user => 
        user.email && 
        user.email.toLowerCase() === email.toLowerCase()
    );
}

module.exports = { usuarioExiste, emailExiste };