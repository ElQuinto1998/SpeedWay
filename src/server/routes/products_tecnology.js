const express = require('express');
const router = express.Router();

router.get('/products_tecnology/gallery', (req, res) => {
    res.render('products_tecno/gallery');
});

module.exports = router;