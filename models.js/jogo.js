
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Jogo extends Model {}

Jogo.init({
  titulo: DataTypes.STRING,
  descricao: DataTypes.TEXT,
  precoBase: DataTypes.DOUBLE
}, {
  sequelize,
  modelName: 'Jogo',
  tableName: 'jogos'
});

module.exports = Jogo;
