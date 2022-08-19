const mongoose = require('mongoose');
const EmplSchema = mongoose.Schema({
    name:  String,
            
    cin: {
        type: String,
        unique: [true, 'The cin is unique']
       
    },
    tel: {
        type: String,
        unique: [true, 'The tel is unique']
       
    },
    addr:  String,
    email: {
            type: String,
            unique: [true, 'The email is unique']
           
    },
    sexe:  String,
    password :  String,
    post:  String,
  
    picture:  String,
}, 
{
    timestamps: true
});

module.exports = mongoose.model('Empl', EmplSchema);