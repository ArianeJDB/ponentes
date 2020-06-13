const Speaker = require('../models/speaker');
const { hash } = require('../lib/security');

const find = async (params = {}) => new Promise(async (resolve, reject) => {
  try {
    const speakers = await Speaker.find(params, { password: 0, passwordHash: 0 }).lean().exec();
    resolve(speakers);
  } catch (ex) {
    reject(ex);
  }
});

const findById = async (id) => new Promise(async (resolve, reject) => {
  try {
    const speaker = await Speaker.findById(id).lean().exec();
    resolve(speaker);
  } catch (ex) {
    reject(ex);
  }
});

const create = async (data = {}) => new Promise(async (resolve, reject) => {
  const { password, ...rest } = data;
  const passwordHash = await hash(password);
  const newSpeaker = new Speaker({ ...rest, password: passwordHash });
  newSpeaker.save((err, speaker) => {
    if (err) reject(err);
    else {
      const { password, ...rest } = speaker.toJSON();
      resolve(rest);
    }
  });
});

const findOne = async (params) => new Promise(async (resolve, reject) => {
  try {
    const speaker = await Speaker.findOne(params, '+password').lean().exec();
    resolve(speaker);
  } catch (ex) {
    reject(ex);
  }
});

const findOneWithPassword = async (params) => new Promise(async (resolve, reject) => {
  try {
    const speaker = await Speaker.findOne(params, { password: 1, email: 1 }).lean().exec();
    resolve(speaker);
  } catch (ex) {
    reject(ex);
  }
});

const update = async (id, data) => new Promise(async (resolve, reject) => {
  try {
    const updated = await Speaker.findByIdAndUpdate(id, data).lean().exec();
    console.log(updated);
    resolve(updated);
  } catch (ex) {
    reject(ex);
  }
});

const remove = async (id) => new Promise(async (resolve, reject) => {
  try {
    const output = await Speaker.findByIdAndRemove(id).lean().exec();
    resolve(output);
  } catch (ex) {
    reject(ex);
  }
});

module.exports = {
  find,
  create,
  remove,
  update,
  findOne,
  findById,
  findOneWithPassword
};
