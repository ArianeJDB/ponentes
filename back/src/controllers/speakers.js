
const { hash } = require('../lib/security');
const {
  find: findSpeakers, create, findOne, findById, update, remove,
} = require('../queries/speaker');

async function getSpeakers(req, res, next) {
  try {
    const speakers = await findSpeakers();
    if (!speakers.length) return res.status(404).send({ message: 'No speaker found' });
    res.status(200).send({ success: true, count: speakers.length, data: speakers });
  } catch (ex) {
    next(ex);
  }
}

async function getOneSpeaker(req, res, next) {
  const { speakerId } = req.params;
  try {
    const speaker = await findById(speakerId);
    if (!speaker) return res.status(404).send({ message: 'This speaker doesnt exist' });
    res.status(200).send({ success: true, data: speaker });
  } catch (ex) {
    next(ex);
  }
}

// registration
async function createSpeaker(req, res, next) {
  const speaker = req.body;
  try {
    const speakerStored = await create(speaker);
    res.status(201).send({ success: true, data: speakerStored });
  } catch (ex) {
    console.log(ex);
    next(ex);
  }
}

// addSpeaker(admin.email, admin.passwordHash)


// esto no he entendido muy bien para qué es
async function addSpeaker(email, password) {
  // const email = req.body.email
  // const password = req.body.password
  const passwordHash = await hash(password);

  findOne({ email }, async (error, speaker) => {
    if (!speaker) {
      speaker = new Speaker({ email, passwordHash });
    } else {
      speaker.passwordHash = passwordHash;
    }
    await speaker.save();
  });
}

async function updateSpeaker(req, res, next) {
  const { speakerId } = req.params;
  const updated = req.body;
  try {
    const speakerUpdated = await update(speakerId, updated);
    res.status(200).send({ success: true, data: speakerUpdated });
  } catch (ex) {
    next(ex);
  }
}

async function deleteSpeaker(req, res, next) {
  const { params } = req;
  const { speakerId } = params;
  try {
    await remove(speakerId);
    res.status(200).send({ success: true });
  } catch (ex) {
    next(ex);
  }
}


module.exports = {
  getSpeakers,
  getOneSpeaker,
  createSpeaker,
  updateSpeaker,
  deleteSpeaker,
};
