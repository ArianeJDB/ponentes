'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const cors = require('cors')
const { verify } = require('./utils/auth')

const { find } = require('./queries/speaker')

const createRouter = require('./routes/index')

const createApp = port => {
    const app = express()

    // esto es una comprobación mínima de seguridad
    app.use(helmet())
    app.disable('x-powered-by');

    const SECRET_KEY = 'SECRET_KEY'

    passport.use(new BasicStrategy(verify));

    app.use(passport.initialize());

    const jwtOpts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: SECRET_KEY
    }

    passport.use(new JwtStrategy(jwtOpts, async (payload, done) => {
        const speaker = await find({ email: payload.email });
        if (speaker) {
            return done(null, speaker);
        } else {
            return done(null, false, { message: 'Speaker not found' });
        }

    }));

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(cors())
    app.use(createRouter())

    app.use(function(err, req, res, next) {
        console.error(err.stack);
        res.status(500).send({ message: 'Something broke!' });
    });
    app.listen(port)
    return app
}


module.exports = createApp;
