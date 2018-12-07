const express = require('express');
const router = express.Router();

router.get('/products/all', (req, res) => {
    res.render('products/all_products');
});
router.get('/products/add', (req, res) => {
    res.render('products/add_product');
});

module.exports = router;