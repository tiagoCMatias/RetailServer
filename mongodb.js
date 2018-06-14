const mongoose = require('mongoose');
const url = process.env.MONGODB_URI || "mongodb://localhost/retail";

mongoose.Promise = global.Promise;
mongoose.connect(url);
