const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    res.render('user/signin');
});
router.get('/users/signup', (req, res) => {
    res.render('user/signup');
});

module.exports = router;