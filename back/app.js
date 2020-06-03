'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs');
const https = require('https');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const cors = require('cors')
const config = require('./config')

const api = require('./routes/index')
const login = require('./routes/login')
const admin = require('./routes/admin')
const speakers = require('./controllers/speakers')
const app = express()

const SECRET_KEY = 'SECRET_KEY'

async function verify(email, password, done) {
    try {
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
    catch (err) {
        console.log(err.message)
    }
}
passport.use(new BasicStrategy(verify));

app.use(passport.initialize());

const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_KEY
}

passport.use(new JwtStrategy(jwtOpts, async (payload, done) => {

    const speaker = await speakers.find(payload.email);
    if (speaker) {
        return done(null, speaker);
    } else {
        return done(null, false, { message: 'Speaker not found' });
    }

}));
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
app.use('/login', login)
app.use('/admin', admin)

module.exports = app;