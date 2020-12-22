const express = require('express');
const bcrypt = require('bcrypt');


const app = express();

const User = require('../models/user')



app.get('/', (req, res) => {
    User.find()
        .exec((err, users) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok: true,
                users
            })
        })
});


app.get('/:id', (req, res) => {

    let id = req.params.id;


    User.findById(id)
        .exec((err, user) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok: true,
                user
            })
        })
});

app.post('/', (req, res) => {

    let body = req.body;

    let user = new User({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10)
    });

    user.save((error, userDB) => {
        if (error) {
            return res.status(400).json({
                ok: false,
                msg: 'error de guardado',
                error
            });
        }
        res.json({
            ok: true,
            userDB
        })
    });
});


app.delete('/:id', (req, res) => {

    let id = req.params.id;


    User.findByIdAndUpdate(id)
        .exec((err, user) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok: true,
                user
            })
        })
});

module.exports = app;