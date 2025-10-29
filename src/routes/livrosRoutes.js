const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.get('/', livroController.listarLivros);

router.get('/novo', livroController.mostrarFormularioNovo);

router.post('/novo', livroController.criarLivro);

router.get('/editar/:id', livroController.mostrarFormularioEditar);

router.post('/editar/:id', livroController.atualizarLivro);

router.post('/excluir/:id', livroController.excluirLivro);

module.exports = router;