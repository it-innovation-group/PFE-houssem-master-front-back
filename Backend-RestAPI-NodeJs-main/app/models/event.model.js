const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
   
     idee: String,
     email: String,
     nameev: String,
     descri: String,
     nbrep: String,
     nbreo : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', EventSchema);