const security = require('../lib/security')

const { find } = require('../queries/speaker')


const verifyPassword = async (speaker, password) => security.compare(password, speaker.passwordHash);

async function verify(email, password, cb) {
    try {
        let speaker = await find({ email });
        if (!speaker) {
            return cb(null, false, { message: 'User not found' });
        }
        const isPasswordVerified = await verifyPassword(speaker, password)
        if (isPasswordVerified) {
            return cb(null, speaker);
        } else {
            return cb(null, false, { message: 'Incorrect password' });
        }
    }
    catch (err) {
        console.log(err.message)
    }
}

module.exports = { verify, verifyPassword }
