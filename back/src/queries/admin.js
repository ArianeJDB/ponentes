const Admin = require('../models/admin');
const { hash } = require('../lib/security');

const find = async (params = {}) => new Promise(async (resolve, reject) => {
  try {
    const admins = await Admin.find(params, { password: 0, passwordHash: 0 }).exec();
    resolve(admins);
  } catch (ex) {
    reject(ex);
  }
});

const create = async (data = {}) => new Promise(async (resolve, reject) => {
  const { password, ...rest } = data;
  const hashedPassword = await hash(password);
  const entrada = { ...rest, password: hashedPassword };
  const admin = new Admin(entrada);
  admin.save((err, admin) => {
    if (err) reject(err);
    else {
      const response = admin.toJSON();
      const { password, ...rest } = response;
      resolve(rest);
    }
  });
});

module.exports = {
  find,
  create,
};
