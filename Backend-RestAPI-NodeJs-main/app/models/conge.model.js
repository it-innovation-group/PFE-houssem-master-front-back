const mongoose = require('mongoose');

const CongeSchema = mongoose.Schema({
    
    name: String,
    email: String,
    tel: String,
    nbr: String,
    reqt: String

}, {
    timestamps: true
});

module.exports = mongoose.model('Conge', CongeSchema);