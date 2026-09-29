const { userDB } = require('../config/database')

function usuarioExiste(email, senha, database = userDB) {
    if (!database || !Array.isArray(database.usuarios)) return false;
    
    return database.usuarios.some(user => 
        user.email.toLowerCase() === email.toLowerCase() && 
        String(user.senha) === String(senha)
    )
}

function emailExiste(email, database = userDB) {
    if (!database || !Array.isArray(database.usuarios)) return false;
    
    return database.usuarios.some(user => 
        user.email.toLowerCase() === email.toLowerCase()
    )
}

module.exports = { usuarioExiste, emailExiste }