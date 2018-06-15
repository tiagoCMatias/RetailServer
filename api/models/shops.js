const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*const location = new GeoJSON({
    point: {
        type: "Point",
        coordinates: [Number]
    }
});*/

const ShopSchema = new Schema({
  cliente: {
    type: String,
    required: "Shop name is mandatory."  
  },
  location: {
    type: { type: String }
    , coordinates: [Number]
  },
  address: {
    type: String,
    required: "Address is mandatory."  
  },
  shopType: {
    type: String,
    required: "shopType is mandatory."  
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

ShopSchema.index({ location: '2dsphere' });
module.exports = mongoose.model('Shop', ShopSchema);

