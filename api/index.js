require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


//* Importacion de routes
const routes = require('./routes/index')

// parse aplication/x-ww.form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse aplication/json
app.use(bodyParser.json());


app.use(routes);

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto ${process.env.PORT}`);
})



