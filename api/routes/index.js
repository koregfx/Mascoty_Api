const express = require('express');

const app = express();

const User = require('./user');


app.use('/user', User);
app.get('/', (req, res) => {
    res.send('respuesta en el puerto 3000 en local host')
})


module.exports = app;