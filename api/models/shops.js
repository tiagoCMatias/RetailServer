const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopSchema = new Schema({
  cliente: {
    type: String,
    required: "Shop name is mandatory."  
  },
  latitude: {
    type: Number,
    required: "Shop latitude is mandatory."
  },
  longitude: {
    type: Number,
    required: "Shop longitude is mandatory."
  },
  address: {
    type: String,
    required: "Address is mandatory."  
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

module.exports = mongoose.model('Shop', ShopSchema);

