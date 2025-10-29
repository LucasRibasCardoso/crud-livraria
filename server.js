const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const livrosRoutes = require('./src/routes/livrosRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/livros');
});

app.use('/livros', livrosRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});