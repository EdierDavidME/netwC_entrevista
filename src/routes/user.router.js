const express = require('express');
const Router = express.Router();

const { check } = require('express-validator');
const userController = require('../controllers/user.controller');

Router.put('/:id', [
    check('actual_password', 'La contraseña debe ser de mínimo 8 caracteres').not().isEmpty().isLength({ min: 8 }),
    check('new_username', 'El nombre ingresado no es válido').not().isEmpty().isLength({ min: 2 }),
    check('new_password', 'La contraseña debe ser de mínimo 8 caracteres').not().isEmpty().isLength({ min: 8 }),
    check('new_repeat_password', 'La contraseña debe ser de mínimo 8 caracteres').not().isEmpty().isLength({ min: 8 }),
], userController.updateDataUser);

module.exports = Router;