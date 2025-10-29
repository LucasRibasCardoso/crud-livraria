const Livro = require('../models/Livro');

exports.listarLivros = async (req, res) => {
  try {
    const livros = await Livro.findAll();
    res.render('livros/listar', { livros }); // Renderiza a view e passa os livros
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.mostrarFormularioNovo = (req, res) => {
  res.render('livros/formulario', { livro: null, action: '/livros/novo' });
};

exports.criarLivro = async (req, res) => {
  try {
    await Livro.create(req.body);
    res.redirect('/livros');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.mostrarFormularioEditar = async (req, res) => {
  try {
    const livro = await Livro.findByPk(req.params.id);
    res.render('livros/formulario', { livro, action: `/livros/editar/${livro.id}` });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.atualizarLivro = async (req, res) => {
  try {
    await Livro.update(req.body, { where: { id: req.params.id } });
    res.redirect('/livros');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.excluirLivro = async (req, res) => {
  try {
    await Livro.destroy({ where: { id: req.params.id } });
    res.redirect('/livros');
  } catch (error) {
    res.status(500).send(error.message);
  }
};