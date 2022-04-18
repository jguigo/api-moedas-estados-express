const express = require("express");
const routes = express.Router();
const MoedasController = require('../controller/moedas.controller');

routes.get('/', MoedasController.getHome);
routes.get('/moedas', MoedasController.listarMoedas);

module.exports = routes;