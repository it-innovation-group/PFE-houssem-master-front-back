const Conge = require('../models/conge.model.js');

// Create and Save a new conge
exports.create = (req, res) => {
   

    // Create a conge
    const conge = new Conge({
        name : req.body.name || "Untitled Conge",
        email: req.body.email,
        tel: req.body.tel,
        nbr: req.body.nbr,
        reqt: req.body.reqt
    });

    // Save conge in the database
    conge.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the conge."
        });
    });
};

// Retrieve and return all conge from the database.
exports.findAll = (req, res) => {
    Conge.find()
    .then(conges => {
        res.send(conges);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving conges."
        });
    });
};

// Find a single conge with a congeId
exports.findOne = (req, res) => {
    Conge.findById(req.params.congeId)
    .then(conge => {
        if(!conge) {
            return res.status(404).send({
                message: "conge not found with id " + req.params.congeId
            });            
        }
        res.send(conge);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "conge not found with id " + req.params.congeId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving conge with id " + req.params.congeId
        });
    });
};

// Update a conge identified by the congeId in the request
exports.update = (req, res) => {
   

    // Find conge and update it with the request body
    Conge.findByIdAndUpdate(req.params.congeId, {
        name : req.body.name || "Untitled Conge",
        email: req.body.email,
        tel: req.body.tel,
        nbr: req.body.nbr,
        reqt: req.body.reqt
    }, {new: true})
    .then(conge => {
        if(!conge) {
            return res.status(404).send({
                message: "conge not found with id " + req.params.congeId
            });
        }
        res.send(conge);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "conge not found with id " + req.params.congeId
            });                
        }
        return res.status(500).send({
            message: "Error updating conge with id " + req.params.congeId
        });
    });
};

// Delete a conge with the specified congeId in the request
exports.delete = (req, res) => {
    Conge.findByIdAndRemove(req.params.congeId)
    .then(conge => {
        if(!conge) {
            return res.status(404).send({
                message: "conge not found with id " + req.params.congeId
            });
        }
        res.send({message: "conge deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "conge not found with id " + req.params.congeId
            });                
        }
        return res.status(500).send({
            message: "Could not delete conge with id " + req.params.congeId
        });
    });
};
