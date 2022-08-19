module.exports = (app) => {
    const conges = require('../controllers/conge.controller.js');


    app.post('/conges', conges.create);

    
    app.get('/conges', conges.findAll);

   
    app.get('/conges/:congeId', conges.findOne);

    
    app.put('/conges/:congeId', conges.update);

    
    app.delete('/conges/:congeId', conges.delete);
}
