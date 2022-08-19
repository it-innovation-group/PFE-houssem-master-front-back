const Ajoute = require('../models/ajoute.model.js');

// Create and Save a new inscri
exports.create = (req, res) => {
    // Validate request
 

    // Create a inscri
    const ajoute = new Ajoute({
        name: req.body.name || "Untitled ajoute", 
        niveau:  req.body.niveau,
        cin: req.body.cin,
        email: req.body.email,
        addr: req.body.addr,
        tel: req.body.tel,
        cv: req.body.cv,
        lettre : req.body.lettre
    });

    // Save inscri in the database
    ajoute.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the ajoute."
        });
    });
};

// Retrieve and return all inscri from the database.
exports.findAll = (req, res) => {
    Ajoute.find()
    .then(ajoutes => {
        res.send(ajoutes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving ajoutes."
        });
    });
};

// Find a single inscri with a inscriId
exports.findOne = (req, res) => {
    Ajoute.findById(req.params.ajouteId)
    .then(ajoute => {
        if(!ajoute) {
            return res.status(404).send({
                message: "ajoute not found with id " + req.params.ajouteId
            });            
        }
        res.send(ajoute);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "inscri not found with id " + req.params.ajouteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving inscri with id " + req.params.ajouteId
        });
    });
};

// Update a inscri identified by the inscriId in the request
exports.update = (req, res) => {
   

    // Find inscri and update it with the request body
    Ajoute.findByIdAndUpdate(req.params.ajouteId, {
        name: req.body.name || "Untitled ajoute", 
        niveau: req.body.niveau,
        cin: req.body.cin,
        email: req.body.email,
        addr: req.body.addr,
        tel: req.body.tel,
        cv: req.body.cv,
        lettre:req.body.lettre
    }, {new: true})
    .then(ajoute => {
        if(!ajoute) {
            return res.status(404).send({
                message: "ajoute not found with id " + req.params.ajouteId
            });
        }
        res.send(ajoute);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: " Ajoute not found with id " + req.params.ajouteId
            });                
        }
        return res.status(500).send({
            message: "Error updating ajoute with id " + req.params.ajouteId
        });
    });
};

// Delete a inscri with the specified inscriId in the request
exports.delete = (req, res) => {
    Ajoute.findByIdAndRemove(req.params.ajouteId)
    .then(ajoute => {
        if(!ajoute) {
            return res.status(404).send({
                message: "ajoute not found with id " + req.params.ajouteId
            });
        }
        res.send({message: "ajoute deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "inscri not found with id " + req.params.ajouteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete inscri with id " + req.params.ajouteId
        });
    });
};
