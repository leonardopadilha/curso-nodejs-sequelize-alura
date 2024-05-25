const express = require('express');
const pessoas = require('./pessoaRoute.js');
const categorias = require('./CategoriasRoute.js');
const cursos = require('./CursoRoute.js');

module.exports = app => {
  app.use(
    express.json(),
    pessoas,
    categorias,
    cursos
  );
};