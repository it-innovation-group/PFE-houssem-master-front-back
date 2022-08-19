module.exports = (app) => {
    const ajoutes = require('../controllers/ajoute.controller.js');


    app.post('/ajoutes', ajoutes.create);

    
    app.get('/ajoutes', ajoutes.findAll);

   
    app.get('/ajoutes/:ajouteId', ajoutes.findOne);

    
    app.put('/ajoutes/:ajouteId', ajoutes.update);

    
    app.delete('/ajoutes/:ajouteId', ajoutes.delete);
}
