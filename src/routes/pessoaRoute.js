const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const MatriculaContoller = require('../controllers/MatriculaController.js');

const pessoaController = new PessoaController();
const matriculaController = new MatriculaContoller();

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.pegaUmId(req, res));
router.post('/pessoas/:estudanteId/matriculas', (req, res) => pessoaController.pegaMatriculas(req, res));

router.post('/pessoas', (req, res) => pessoaController.criaNovo(req, res));
router.post('/pessoas/:estudanteId/matriculas', (req, res) => MatriculaContoller.criaNovo(req, res));

router.put('/pessoas/:id', (req, res) => pessoaController.atualiza(req, res));

router.delete('/pessoas/:id', (req, res) => pessoaController.exclui(req, res));

module.exports = router;

