module.exports = (app) => {
    const stages = require('../controllers/stage.controller.js');


    app.post('/stages', stages.create);

    
    app.get('/stages', stages.findAll);

   
    app.get('/stages/:stageId', stages.findOne);

    
    app.put('/stages/:stageId', stages.update);

    
    app.delete('/stages/:stageId', stages.delete);
}
