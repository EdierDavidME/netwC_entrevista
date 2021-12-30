const User = require('../models/user');
const { validationResult } = require('express-validator');

const registerUser = (req, res) => {
    try {
        const errors = validationResult(req);
        const { _id, username, password, repeat_password } = req.body;

        if (!errors.isEmpty()) return res.status(400).json({ errores: errors.array() });

        if (_id == "") {

            if (password !== repeat_password) return res.status(403).json({ message: "Las contraseñas no coinciden" });

            let userData = new User({
                username: username,
                password: password
            })

            userData.save()
                .then((user) => {
                    return res.status(200).json({ message: "Usuario registrado exitosamente" });
                }).catch((error) => {
                    return res.status(403).json({ message: "¡El usuario ya existe!" });
                })
        }
    } catch (error) {
        return res.status(404).json({ message: 'Los datos ingresados estan incompletos, por favor verifique e intente nuevamente', error });
    }

}

module.exports = {
    registerUser,
}