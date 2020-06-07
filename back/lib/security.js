const bcrypt = require('bcrypt')

const compare = async (password, hash) => bcrypt.compare(password, hash)

const hash = async (password) => bcrypt.hash(password, bcrypt.genSaltSync(8), null)

module.exports = { compare, hash }
