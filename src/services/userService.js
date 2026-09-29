const { userDB } = require('../config/database');

function getUsuariosArray(database) {
    if (!database) return [];
    // Se database já for um array (ex: testeDB), usa-o diretamente.
    // Se for um objeto com a propriedade .usuarios (ex: userDB), usa essa lista.
    if (Array.isArray(database)) return database;
    if (Array.isArray(database.usuarios)) return database.usuarios;
    return [];
}

function usuarioExiste(email, senha, database = userDB) {
    if (!email || senha === undefined || senha === null) return false;

    const usuarios = getUsuariosArray(database);

    return usuarios.some(user => 
        user.email && 
        user.email.toLowerCase() === email.toLowerCase() && 
        String(user.senha) === String(senha)
    );
}

function emailExiste(email, database = userDB) {
    if (!email) return false;

    const usuarios = getUsuariosArray(database);

    return usuarios.some(user => 
        user.email && 
        user.email.toLowerCase() === email.toLowerCase()
    );
}

module.exports = { usuarioExiste, emailExiste };