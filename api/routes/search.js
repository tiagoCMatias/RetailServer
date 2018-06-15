const express = require('express');
const router = express.Router();

const shopModel = require('../models/shops');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Get Search'
    });
});

router.post('/', (req, res, next) => {
    let location = req.body.location;
    let type = req.body.type
    console.log(location);
    console.log(type);
    shopModel.find({"location": 
        { $near : 
            {
                $geometry : 
                {
                    type : "Point" ,
                    coordinates : [ location.latidude, location.longitude ]
                },
                $maxDistance : 15000 // in meters
            }
        }    
    }).where("shopType").equals(type)
    .then(suc => {
        console.log("Found",suc.length, "stores near you");
        res.status(200).json({
            message: suc
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({
            message: "Erro fetching data"
        });
    });
    
});

module.exports = router;