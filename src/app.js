const express = require('express');
const app = express();

// routes
const registerUser = require('./routes/register.router');
const loginUser = require('./routes/login.router');
const updateUser = require('./routes/user.router');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/v1/register', registerUser);
app.use('/api/v1/login', loginUser);
app.use('/api/v1/user', updateUser);

// 404
app.use((req, res, next) => {
    res.status(404).send('Error 404 pagina no encontrada ');
});

module.exports = app