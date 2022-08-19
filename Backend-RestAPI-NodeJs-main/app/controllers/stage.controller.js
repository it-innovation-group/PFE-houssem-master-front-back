const Stage = require('../models/stage.model.js');

// Create and Save a new stage
exports.create = (req, res) => {
 

    // Create a stage
    const stage = new Stage({
        name: req.body.name || "Untitled  stage", 
        
        cin: req.body.cin,
        email: req.body.email,
        addr: req.body.addr,
        tel: req.body.tel,
        type: req.body.type,
        cv: req.body.cv,
        lettre:req.body.lettre
    });

    // Save stage in the database
    stage.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the stage."
        });
    });
};

// Retrieve and return all stage from the database.
exports.findAll = (req, res) => {
    Stage.find()
    .then(stages => {
        res.send(stages);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving stages."
        });
    });
};

// Find a single stage with a stageId
exports.findOne = (req, res) => {
    Stage.findById(req.params.stageId)
    .then(stage => {
        if(!stage) {
            return res.status(404).send({
                message: "stage not found with id " + req.params.stageId
            });            
        }
        res.send(stage);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "stage not found with id " + req.params.stageId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving stage with id " + req.params.stageId
        });
    });
};

// Update a stage identified by the stageId in the request
exports.update = (req, res) => {
 

    // Find stage and update it with the request body
    Stage.findByIdAndUpdate(req.params.stageId, {
        name: req.body.name || "Untitled  stage", 
        
        cin: req.body.cin,
        email: req.body.email,
        addr: req.body.addr,
        tel: req.body.tel,
        type: req.body.type,
        cv: req.body.cv,
        lettre:req.body.lettre
    }, {new: true})
    .then(stage => {
        if(!stage) {
            return res.status(404).send({
                message: "stage not found with id " + req.params.stageId
            });
        }
        res.send(stage);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "stage not found with id " + req.params.stageId
            });                
        }
        return res.status(500).send({
            message: "Error updating stage with id " + req.params.stageId
        });
    });
};

// Delete a stage with the specified stageId in the request
exports.delete = (req, res) => {
    Stage.findByIdAndRemove(req.params.stageId)
    .then(stage => {
        if(!stage) {
            return res.status(404).send({
                message: "stage not found with id " + req.params.stageId
            });
        }
        res.send({message: "stage deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "stage not found with id " + req.params.stageId
            });                
        }
        return res.status(500).send({
            message: "Could not delete stage with id " + req.params.stageId
        });
    });
};
