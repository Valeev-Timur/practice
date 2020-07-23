const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
const PORT = 3001;
const app = express();
const postsRoute = require('./routes/posts');
const adminRoute = require('./routes/getByHastag');
const Clarifai = require('clarifai');
const ap = new Clarifai.App({apiKey: 'a6e6c129ba9a4d4e9a06b6b1985c1a15'});
const ig = require('instagram-scraping');
require('dotenv/config');
const igScrap = require('ig-scrap'); // test
const NEURO_MODEL = 'EroSearch';
const DELAY = 300;
const MAX_DIGITS_AFTER_ZERO = 2;
const PROBABILITY_TO_BLACKLIST = 0.5;
const MIN_PROBABILITY_TO_YELLOWLIST = 0.25;
const MAX_PROBABILITY_TO_YELLOWLIST = 0.49;

app.use(bodyParser.json({ limit: '10mb', extended: true })); // какая-то защита от доса
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true })); // какая-то защита от доса
app.use(cors()); // универсальный корс
app.use('/posts', postsRoute);
app.use('/admin', adminRoute);


async function neuroWorker(photoes){
    await photoes.forEach((photo, index) => {
        setTimeout(() => {
            ap.models.predict(NEURO_MODEL, photo)
            .then(
                (response) => {
                    var probability = response['outputs'][0]['data']['concepts'][0]['value'].toFixed(MAX_DIGITS_AFTER_ZERO);
                    if (probability >= PROBABILITY_TO_BLACKLIST){
                        console.log(photo + '\nblacklist');
                    }
                    else if (probability > MIN_PROBABILITY_TO_YELLOWLIST && probability <= MAX_PROBABILITY_TO_YELLOWLIST){
                        console.log(photo + '\nyellowlist');
                    }
                    else {
                        console.log(photo + '\n' + probability + '\nsave to DB');
                    }
                })
            .catch(err => {
                console.log(err);
            });
        }, DELAY * (index + 1));
    });
}


app.get("/collections/tag/:tag", (req, res) => {
    let tag = decodeURIComponent(req.params.tag);
    let hashtagArray;
    ig.scrapeTag(`${tag}`)
        .then(result => {
            var hashtag = [result['total']];
            for (let index = 0; index < result['total']; index++) {       
                hashtag[index] = result['medias'][index]['display_url']       
            }   
        hashtagArray = [result['total']];
        hashtagArray = hashtag;
        neuroWorker(hashtagArray);
});   


const getCorrectURL = url => new URL(url).href;
// axios.get(getCorrectURL(`https://www.instagram.com/web/search/topsearch/?context=blended&query=${req.params.tag}`))
axios.get(getCorrectURL(`https://www.instagram.com/explore/tags/${req.params.tag}/?__a=1`))
    .then(response => {
        let images = Object.values(response.data)
            .map(item => Object.values(item.hashtag.edge_hashtag_to_media.edges)
            .map(elem => elem.node.display_url));

        res.send(images);
    }).catch(err => {
        res.send(err);
    })
});


app.get('/', (req, res) => {
    res.send('Admin page');
});

async function start(){
    try {
        mongoose.connect(process.env.DB_CONNECTION,
            { useNewUrlParser: true }, () =>
            console.log('connected to DB')               
        );
        app.listen(PORT, () => {
            console.log(`Listening on port: ${PORT}`);
        });     
    } catch (e) {
        console.log(e)
    }
}

start()


