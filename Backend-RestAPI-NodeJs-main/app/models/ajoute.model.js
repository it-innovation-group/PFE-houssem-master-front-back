const mongoose = require('mongoose');

const AjouteSchema = mongoose.Schema({
     name : String,
     niveau: String ,
     cin: String,
     email: String,
     addr: String,
     tel: String,
     cv: String,
     lettre : String,
  },{
    timestamps: true
});

module.exports = mongoose.model('Ajoute', AjouteSchema);