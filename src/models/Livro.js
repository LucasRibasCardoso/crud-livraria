const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Importa a conexão

const Livro = sequelize.define('Livro', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  editora: {
    type: DataTypes.STRING,
  },
  anoPublicacao: {
    type: DataTypes.INTEGER,
  },
  isbn: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
    defaultValue: null
  }
}, {
  timestamps: true
});

async function syncModel() {
  await Livro.sync();
  console.log('Tabela "Livros" sincronizada.');
}

syncModel();

module.exports = Livro;