
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Conquista extends Model {}

Conquista.init({
  titulo: DataTypes.STRING,
  descricao: DataTypes.TEXT
}, {
  sequelize,
  modelName: 'Conquista',
  tableName: 'conquistas'
});

module.exports = Conquista;
