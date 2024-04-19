const usuario = conn.define('usuario', {
    nickname: { type: DataTypes.STRING },
    nome: { type: DataTypes.STRING }
});

module.exports = usuario;