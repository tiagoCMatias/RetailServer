const express = require('express');
const router = express.Router();

const shopModel = require('../models/shops');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Get retail'
    });
});


router.get('/:cliente', (req, res, next) => {
    
    shopModel.find({ 'cliente': req.params.cliente }, function(err, response) {
        res.status(200).json({
            message: response
        });
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Post Retail'
    });
});

module.exports = router;