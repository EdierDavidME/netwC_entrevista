const User = require('../models/user');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const login = async (req, res, next) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errores: errors.array() });

        const { username, password } = req.body;

        if (username !== "" || password !== "") {
            const userFound = await User.findOne({ "username": username });
            if (!userFound) {
                return res.status(404).json({ message: "El usuario ingresado no se encuentra en nustro sistema" });
            }

            if (!bcrypt.compareSync(password, userFound.password)) {
                return res.status(404).json({ message: "Nombre de usuario o contraseña inválidos" });
            }

            return res.status(200).json({ message: `Bienvenido: ${username}`, userData: userFound });

        }
    } catch (error) {
        return res.status(500).json({ message: 'Algo salió mal', error });
    }
}

module.exports = {
    login
}