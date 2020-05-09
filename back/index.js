'use strict';

const mongoose = require('mongoose')
const app = require('./app')
const colors = require('colors')
const config = require('./config')

mongoose.connect(config.db,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }, 
    (err, res) => {
        if(err) { return console.log(`Error al conectar a la BBDD  ${err}`.red.bold)};
        console.log('Conectado a la BBDD'.cyan.inverse.bold)
        app.listen(config.port, () => {
            console.log(`Escuchanding en ${config.port}!`.rainbow.inverse.bold);
    });
})

