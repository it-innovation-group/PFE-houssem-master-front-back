const mongoose = require('mongoose');
const PartiSchema = mongoose.Schema({
    name:  String,
    email:  String,
    tel:  String,
    post:  String,
    nameev:  String,
    type : String,
            
}, 
{
    timestamps: true
});

module.exports = mongoose.model('Parti', PartiSchema);