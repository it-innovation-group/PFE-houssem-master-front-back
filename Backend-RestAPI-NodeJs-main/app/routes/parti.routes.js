module.exports = (app) => {
    const partis = require('../controllers/parti.controller.js');


    app.post('/partis', partis.create);

    
    app.get('/partis', partis.findAll);

   
    app.get('/partis/:partiId', partis.findOne);

    
    app.put('/partis/:partiId', partis.update);

    
    app.delete('/partis/:partiId', partis.delete);
}
