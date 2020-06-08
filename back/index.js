'use strict';

const mongoose = require('mongoose')
const colors = require('colors')
const createApp = require('./app')
const config = require('./config')


mongoose.connect(config.db,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err, res) => {
        if(err) { return console.log(`Error al conectar a la BBDD  ${err}`.red.bold)};
        console.log('Conectado a la BBDD'.cyan.inverse.bold)
        createApp(config.port)
        console.log(`Escuchanding en ${config.port}!`.rainbow.inverse.bold);
})

