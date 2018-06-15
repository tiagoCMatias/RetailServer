let Cabeleireiros_porto = require('./data/Cabeleireiros_porto.json');
let Cabeleireiros_lisboa = require('./data/Cabeleireiros_lisboa.json');
let Floristas_lisboa = require('./data/Floristas_lisboa.json');
let Floristas_porto = require('./data/Floristas_porto.json');

const shopModel = require('./api/models/shops');
const mongodb = require('./mongodb');
const mongoose = require('mongoose');

function insertShop(listOfShops, shopType) {
    listOfShops.forEach(shop => {
        //console.log(shop);
        //console.log("\nNew");
    
        let newShop = new shopModel({
            cliente: shop.cliente,
            location:{ type: 'Point', coordinates: shop.location},
            address: shop.address,
            shopType: shopType
        });
    
        newShop.save(function (err) {
        if (err) return handleError(err);
        // thats it!
        });
    });
}


insertShop(Cabeleireiros_porto, "Cabeleireiros");
insertShop(Cabeleireiros_lisboa, "Cabeleireiros");

insertShop(Floristas_lisboa, "Floristas");
insertShop(Floristas_porto, "Floristas");

console.log("Insert Finished");

