'use strict';

const mongoose = require('mongoose')
const app = require('./app')
const colors = require('colors')
const config = require('./config')
const fs = require('fs');
const https = require('https');
const admin = require('./controllers/admin')

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
    //     app.listen(config.port, () => {
    //         console.log(`Escuchanding en ${config.port}!`.rainbow.inverse.bold);
    // });
    admin.getAdmin()
})

