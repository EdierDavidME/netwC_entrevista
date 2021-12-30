const express = require('express');
const { check } = require('express-validator');

const Router = express.Router();
const registerController = require('../controllers/register.controller');

Router.post('/', [
    check('username', 'El nombre ingresado no es válido').not().isEmpty().isLength({ min: 2 }),
    check('password', 'La contraseña debe ser de mínimo 8 caracteres').not().isEmpty().isLength({ min: 8 }),
    check('repeat_password', 'La contraseña debe ser de mínimo 8 caracteres').not().isEmpty().isLength({ min: 8 }),
], registerController.registerUser);

module.exports = Router;