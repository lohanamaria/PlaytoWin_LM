
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Aquisicao extends Model {}

Aquisicao.init({
  precoFinal: DataTypes.DOUBLE,
  data: DataTypes.DATE
}, {
  sequelize,
  modelName: 'Aquisicao',
  tableName: 'aquisicao'
});

module.exports = Aquisicao;
