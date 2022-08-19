const mongoose = require('mongoose');

const StageSchema = mongoose.Schema({
    name : String,
     cin: String,
    email: String,
    addr: String,
    tel: String,
    type: String,
    cv: String,
    lettre : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Stage', StageSchema);