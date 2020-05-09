const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Speaker = require('./models/speaker')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/speakers', (req, res) => {
    Speaker.find((err, speakers) => {
        if (err) return res.status(500).send({ message: `Error en el servidor ${err}`})
        if (!speakers) return res.status(404).send({ message: "No existen ponentes"})
        res.status(200).send({ speakers })
    })
})

app.get('/api/speakers/:speakerId', (req, res) => {
    let speakerId = req.params.speakerId

    Speaker.findById(speakerId, (err, speaker) => {
        if (err) return res.status(500).send({ message: `Error en el servidor ${err}`})
        if (!speaker) return res.status(404).send({ message: "No existe ese ponente"})
         res.status(200).send({ speaker })
    })

})

app.post('/api/speakers', (req, res) => {
    console.log('POST /api/speakers')
    console.log(req.body)

    let speaker = new Speaker()
    speaker.email = req.body.email,
    speaker.name = req.body.name,
    speaker.biography = req.body.biography,
    speaker.image = req.body.image,
    speaker.github = req.body.github,
    speaker.website = req.body.website,
    speaker.twitter = req.body.twitter,
    speaker.linkedin = req.body.linkedin,
    speaker.talks = req.body.talks,

    speaker.save((err, speakerStored) => {
        if (err) {
            res.status(500).send({message: `Error al guardar en la base de datos: ${err}`})
        } else {
           res.status(200).send({ speaker: speakerStored }); 
        }
        
    })

 
})

app.put('/api/speakers/:speakerId', (req, res) => {
})

app.delete('/api/speakers/:speakerId', (req, res) => {
})

mongoose.connect('mongodb://localhost:27017/speakers',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }, 
    (err, res) => {
        if(err) { return console.log(`Error al conectar a la BBDD  ${err}`)};
        console.log('Conectado a la BBDD')
        app.listen(port, () => {
            console.log(`Escuchanding en ${port}!`);
    });
})

