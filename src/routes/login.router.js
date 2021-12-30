const express = require('express');
const Router = express.Router();

const { check } = require('express-validator');
const loginController = require('../controllers/login.controller');

Router.post('/', [
    check('username', 'El nombre ingresado no es válido').not().isEmpty().isLength({ min: 2 }),
    check('password', 'Contraseña no válida').not().isEmpty().isLength({ min: 8 }),
], loginController.login);

module.exports = Router;