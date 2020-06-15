const Speaker = require('../models/speaker');

const create = (speakerId, talk) => new Promise(async (resolve, reject) => {
  try {
    const speaker = await Speaker.findOneAndUpdate({ _id: speakerId }, { $push: { talks: talk } }).lean().exec();
    const { talks } = speaker;
    const insertedTalk = talks.slice(-1);
    resolve(insertedTalk);
  } catch (ex) {
    reject(ex);
  }
});

const update = (speakerId, talkId, talk) => new Promise(async (resolve, reject) => {
  try {
    const id = { _id: speakerId, 'talks._id': talkId };
    const update = { $set: { 'talks.$': talk } };
    const updatedTalk = await Speaker.findOneAndUpdate(id, update, { multi: true }).exec();
    resolve(updatedTalk);
  } catch (ex) {
    reject(ex);
  }
});

const remove = (speakerId, talkId) => new Promise(async (resolve, reject) => {
  try {
    const id = { _id: speakerId };
    const update = { $pull: { talks: { _id: talkId } } };
    const updated = await Speaker.updateOne(id, update, { multi: true }).exec();
    resolve(updated);
  } catch (ex) {
    reject(ex);
  }
});

module.exports = { create, update, remove };
