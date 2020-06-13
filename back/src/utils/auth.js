const security = require('../lib/security');

const { findOneWithPassword } = require('../queries/speaker');


const verifyPassword = async (speaker, password) => security.compare(password, speaker.password);

function verify(email, password, cb) {
    findOneWithPassword({ email })
      .then(speaker => {
          console.log('verify')
          console.log(speaker)
        if (!speaker) {
          return cb(null, false, new Error('User not found'));
        }
        verifyPassword(speaker, password)
            .then(verification => {
              if (verification) {
                return cb(null, speaker);
              }
              return cb(null, false, new Error('Incorrect password'));
            })
            .catch(cb)
      })
      .catch(cb);
}

module.exports = { verify, verifyPassword };
