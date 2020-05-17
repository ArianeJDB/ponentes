'use strict'

const bcrypt = require('bcrypt-nodejs')
const Speaker =  require('../models/speaker')

function getSpeakers (req, res) {
    Speaker.find({}, { password: 0 }, (err, speakers) => {
        if (err) return res.status(500).send({ message: `Error en el servidor ${err}`})
        if (!speakers) return res.status(404).send({ message: "No existen ponentes"})
        res.status(200).send({ success: true, count: speakers.length, data: speakers })
     
    })
}

function getOneSpeaker (req, res) {
    let speakerId = req.params.speakerId
    let talks;
    Speaker.findById(speakerId, { password: 0 }, (err, speaker) => {
        if (err) return res.status(500).send({ message: `Error en el servidor ${err}`})
        if (!speaker) return res.status(404).send({ message: "This speaker doesnt exist"})
         res.status(200).send({ success: true, data: speaker })
        talks = speaker.talks
    })
}

//registration
function createSpeaker (req, res) {
    console.log(req.body)

    let speaker = new Speaker()
    speaker.email = req.body.email,
    speaker.password = req.body.password
    speaker.name = req.body.name,
    speaker.biography = req.body.biography,
    speaker.image = req.body.image,
    speaker.github = req.body.github,
    speaker.website = req.body.website,
    speaker.twitter = req.body.twitter,
    speaker.linkedin = req.body.linkedin,
    speaker.talks = req.body.talks,

    speaker.save((err, speakerStored) => {
        if (err) res.status(500).send({message: `It couldnt be saved in BBDD: ${err}`})
        else res.status(201).send({ success: true,data: speakerStored }); 
    })
}

async function login(req, res) {
    const email = req.body.email
    const password = req-body.password

    const passwordHash = await bcrypt.hash(password, bcrypt.genSaltSync(8), null)

    let speaker = await Speaker.findOne({ email }).exec();

    if (!speaker) {
        speaker = new Speaker({ email, passwordHash })
    } else {
        speaker.passwordHash = passwordHash
    }
    await speaker.save()
}

async function find (email) {
    return await Speaker.findOne({ email }).exec();
}

async function verifyPassword (speaker, password) {
    return await bcrypt.compare(password, speaker.passwordHash);
}



function updateSpeaker (req, res) {
    let speakerId = req.params.speakerId
    let updated = req.body
    Speaker.findByIdAndUpdate(speakerId, updated, (err, updatedBody) => {
        if (err) return res.status(500).send({ message: `Server error ${err}`})
        res.status(200).send({ success: true, data: updatedBody })
    })
}

function deleteSpeaker (req, res) {
    let speakerId = req.params.speakerId

    Speaker.findById(speakerId, (err, speaker) => {
        if (err) return res.status(500).send({ message: `Server error ${err}`})
        if (!speaker) return res.status(404).send({ message: "This speaker doenst exist"})

        speaker.remove(err => {
            if (err) return res.status(500).send({ message: `Server error ${err}`})
            res.status(200).send({ success: true })
        })
    })
}

function addTalk (req, res) {
    let speakerId = req.params.speakerId
    let talk = req.body.talks
    if(!talk) {res.status(400).send({ message: `You cant send an empty talk`})}
    talk.forEach(item => {
         Speaker.updateOne(
        {_id: speakerId },
        { $push: { talks: item }},
        { multi: true },
        (err) => {
            if (err) res.status(500).send({ message: `There was an error creating this talk ${err}`})
            else res.status(201).send({ success: true, talks: talk })
        },
    )
    },
    
    )
}

function updateTalk (req, res) {
    let speakerId = req.params.speakerId
    let talkId = req.params.talkId;
    let talk = req.body

        Speaker.updateOne(
            {
                _id: speakerId, 
                'talks._id': talkId 
            },
            { $set: {'talks.$': talk }},
            { multi: true },
            (err) => {
                if (err) res.status(500).send({ message: `There was an error creating this talk ${err}`})
                else res.status(200).send({ success: true, talk })
            }
        )

}

function deleteTalk (req, res) {
    let speakerId = req.params.speakerId
    let talkId = req.params.talkId
    let talk = req.body

    Speaker.findById(speakerId, (err) => {
        if (err) return res.status(500).send({ message: `There was an error removing this talk ${err}` })
        if(!talk) return res.status(404).send({ message: 'This talk doesnt exists' })

        Speaker.updateOne(
            { _id: speakerId },
            { $pull: { talks: { _id: talkId }}},
            { multi: true },
            (err) => {
                if (err) res.status(500).send({ message: `There was an error removing this talk ${err}` })
                else res.status(200).send({ message: 'The talk has been removed' })
            }
        )
    })
}
module.exports = {
    getSpeakers,
    getOneSpeaker,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker,
    addTalk,
    updateTalk,
    deleteTalk,
    find,
    verifyPassword,
    login

}
