
const colors = require('colors');
const createApp = require('./app');
const config = require('./config');
const dbConnection = require('./db');

dbConnection(config.db, (err, res) => {
  if (err) { return console.log(`Error al conectar a la BBDD  ${err}`.red.bold); }
  console.log('Conectado a la BBDD'.cyan.inverse.bold);
  createApp(config.port);
  console.log(`Escuchanding en ${config.port}!`.rainbow.inverse.bold);
});
