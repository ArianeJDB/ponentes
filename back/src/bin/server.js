const createApp = require('../index');
const { port } = require('../lib/config')

createApp()
    .catch(err => {
        console.log(`Algo ha ido mal: ${err}`)
    })
    .then(
        app => {
            console.log(`Escuchanding en ${port}!`.rainbow.inverse.bold);
        }
)
