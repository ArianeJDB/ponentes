require('colors');
const createApp = require('./lib/app');
const config = require('./lib/config');
const dbConnection = require('./lib/db');

const runApi = (port = config.port) => new Promise((resolve, reject) => {
    dbConnection(config.db, (err) => {
        if (err) { reject() }
        console.log('Conectado a la BBDD'.cyan.inverse.bold);
        const app = createApp(port);
        resolve(app);
    });
});

module.exports = runApi;
