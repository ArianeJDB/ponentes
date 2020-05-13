'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs');
const https = require('https');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const cors = require('cors')
const config = require('./config')

const api = require('./routes/index')
const speakers = require('./controllers/speakers')
const app = express()

async function verify(email, password, done) {

    let speaker = await speakers.find(email);
    if (!speaker) {
        return done(null, false, { message: 'User not found' });
    }

    if (await speakers.verifyPassword(speaker, password)) {
        return done(null, speaker);
    } else {
        return done(null, false, { message: 'Incorrect password' });
    }
}
passport.use(new BasicStrategy(verify));

app.use(passport.initialize());

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen(config.port, () => {
   console.log(`Escuchanding en ${config.port}!`.rainbow.inverse.bold)
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors()) 
app.use('/api', api)

module.exports = app;