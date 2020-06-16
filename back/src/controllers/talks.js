const { create, update, remove } = require('../queries/talk');

async function addTalk(req, res, next) {
  const { body: talks, params } = req;
  const { speakerId } = params;
  if (!talks.length) {
    return res.status(400).send({ message: 'You cant send an empty talk' });
  }
  try {
    const updates = await Promise.all(talks.map(async (talk) => create(speakerId, talk)));
    res.status(201).send({ success: true, data: updates });
  } catch (ex) {
    next(ex);
  }
}

async function updateTalk(req, res, next) {
  const { body: talk, params } = req;
  const { speakerId, talkId } = params;

  try {
    const speakerUpdated = await update(speakerId, talkId, talk);
    res.status(200).send({ success: true, data: speakerUpdated });
  } catch (ex) {
    next(ex);
  }
}

async function deleteTalk(req, res, next) {
  const { params } = req;
  const { speakerId, talkId } = params;

  try {
    await remove(speakerId, talkId);
    res.status(204).send();
  } catch (ex) {
    next(ex);
  }
}

module.exports = {
  addTalk,
  updateTalk,
  deleteTalk,
};
