const mongoose = require('mongoose')

const CountrySchema = mongoose.Schema({
    name: String,
    region: String
});

module.exports = mongoose.model('Countries', CountrySchema);