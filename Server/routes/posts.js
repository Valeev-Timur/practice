const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const { CheckTokenValidFromReq } = require('../models/login');

const MESSAGE_USER_NOT_FOUND = "User not found";

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message: err});
    }
});

router.post('/', async (req,res) => {
    const post = new Post({
        hashtag: req.body.hashtag,
        category: req.body.category,
        username: req.body.username,
        url: req.body.url,
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err) {
        res.json({message: err});
    }
});

//Добавил проверку токена админа
router.delete('/:url', async (req,res) => {
    try {
        if (!CheckTokenValidFromReq(req)) {
            return res.status(404).send(MESSAGE_USER_NOT_FOUND);
        }

        const removedPost = await Post.remove({url: req.params.url});
        res.json(removedPost);
    } catch(err) {
        res.json({message: err});
    }
})

//Добавил проверку токена админа
router.patch('/:url', async (req, res) => {
    try {
        if (!CheckTokenValidFromReq(req)) {
            return res.status(404).send(MESSAGE_USER_NOT_FOUND);
        }

        const updatedPost = await Post.updateOne(
            {url: req.params.url},
            {$set: {category: req.body.category}}
        );
        res.setHeaders({"Access-Control-Allow-Origin": "*"});
        res.json(updatedPost);
    } catch(err) {
        res.json({message: err});
    }
})

module.exports = router;
