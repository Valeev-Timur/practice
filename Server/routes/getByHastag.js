const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const { Login } = require('../models/login');
const { register } = require('../models/ioc-container');

const DEF_WARN_CATEGORY = "yellow";

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({}, {"hashtag": 1, _id: 0});
        res.json(posts);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/warnposts/:hashtag', async (req, res) => {
    try {
        const posts = await Post.find({$and:[{"hashtag":req.params.hashtag}, {"category":DEF_WARN_CATEGORY}]}, {url: 1, _id: false});
        res.json(posts);
    } catch (err) {
        res.json({message: err});
    }
});

//Обработка логина админа
router.post('/login', async (req, res) => {
    try {
       const token = Login({ login: req.body.login, password: req.body.password });

       register("adminToken", () => { return token });

       res.json({token: token});
    } catch (err) {
       res.json({message: err});
    }
});

module.exports = router;