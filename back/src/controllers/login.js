
const jwt = require('jsonwebtoken');
const { verify } = require('../utils/auth')


const SECRET_KEY = 'SECRET_KEY';

module.exports = function login(req, res) {
  const { email, password } = req.user;
  const speakerData = req.body;
  verify(email, password, (err, data) => {
    console.log(err, data)
    if (err || !data) {
      res.status(401).send({ message: 'Wrong password' })
    } else {
      const opts = { expiresIn: 30000 };
      const { password, talks, _id,...rest } = data
      const token = jwt.sign({ ...rest }, SECRET_KEY, opts);

      return res.status(200).send({ message: 'Auth Passed', token, speakerData: rest });
    }
  })
};
