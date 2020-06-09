
const jwt = require('jsonwebtoken');


const SECRET_KEY = 'SECRET_KEY';

module.exports = function login(req, res) {
  console.log('ostras', req);
  const { email } = req.body;
  const speakerData = req.body;

  const opts = { expiresIn: 30000 };
  const token = jwt.sign({ email }, SECRET_KEY, opts);

  return res.status(200).json({ message: 'Auth Passed', token, speakerData });
};
