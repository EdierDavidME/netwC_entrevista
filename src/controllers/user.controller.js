const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const { validationResult } = require('express-validator');

const updateDataUser = async (req, res, next) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errores: errors.array() });

        const { actual_password, new_username, new_password, new_repeat_password } = req.body;
        const id = req.params.id;

        if (id !== "" && id.length === 24) {
            if (new_username !== "" || actual_password !== "" || new_password !== "" || new_repeat_password !== "") {

                if (new_password !== new_repeat_password) return res.status(403).json({ message: "Las contraseñas no coinciden" });

                const userFound = await User.findById(id);

                if (!userFound) {
                    return res.status(404).json({ message: "El usuario no se encuentra en nustro sistema" });
                }

                if (!bcrypt.compareSync(actual_password, userFound.password)) {
                    return res.status(404).json({ message: "Nombre de usuario o contraseña inválidos" });
                }

                const salts = await bcrypt.genSalt(saltRounds);
                const passHash = await bcrypt.hash(new_repeat_password, salts);

                const findUser = await User.findOne({ "username": new_username });

                if (findUser) {
                    return res.status(404).json({ message: "Por favor, ingrese un nuevo nombre de usuario" });
                }

                await User.findByIdAndUpdate(userFound._id, { "username": new_username, "password": passHash }, { new: true });

                return res.status(200).json({ message: `¡Cambios realizados exitosamente!` });

            } else {
                return res.status(403).json({ message: "Faltan campos por completar" })
            }
        } else {
            return res.status(403).json({ message: "El ID del usuario no es válido" })
        }
    } catch (error) {
        return res.status(500).json({ message: 'Algo salió mal', error });
    }
}

module.exports = {
    updateDataUser
}