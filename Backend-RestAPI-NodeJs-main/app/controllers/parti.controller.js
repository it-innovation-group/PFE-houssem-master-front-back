const  Parti = require('../models/parti.model.js');

// Create and Save a new parti
exports.create = (req, res) => {
  
    // Create a parti
    const parti = new  Parti({
        name: req.body.name || "Untitled  Parti", 
        email:req.body.email,
        tel:  req.body.tel,
        post:  req.body.post,
        nameev:  req.body.nameev,
        type : req.body.type
    });

    // Save parti in the database
    parti.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the parti."
        });
    });
};

// Retrieve and return all parti from the database.
exports.findAll = (req, res) => {
    Parti.find()
    .then(partis => {
        res.send(partis);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving partis."
        });
    });
};

// Find a single parti with a partiId
exports.findOne = (req, res) => {
    Parti.findById(req.params.partiId)
    .then(parti => {
        if(!parti) {
            return res.status(404).send({
                message: "parti not found with id " + req.params.partiId
            });            
        }
        res.send(parti);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "parti not found with id " + req.params.partiId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving parti with id " + req.params.partiId
        });
    });
};

// Update a parti identified by the partiId in the request
exports.update = (req, res) => {
    // Validate Request
   

    // Find parti and update it with the request body
    Parti.findByIdAndUpdate(req.params.partiId, {
        name: req.body.name || "Untitled  Parti", 
        email:req.body.email,
        tel:  req.body.tel,
        post:  req.body.post,
        nameev:  req.body.nameev,
        type : req.body.type
    }, {new: true})
    .then(parti => {
        if(!parti) {
            return res.status(404).send({
                message: "parti not found with id " + req.params.partiId
            });
        }
        res.send(parti);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "parti not found with id " + req.params.partiId
            });                
        }
        return res.status(500).send({
            message: "Error updating parti with id " + req.params.partiId
        });
    });
};

// Delete a parti with the specified partiId in the request
exports.delete = (req, res) => {
    Parti.findByIdAndRemove(req.params.partiId)
    .then(parti => {
        if(!parti) {
            return res.status(404).send({
                message: "parti not found with id " + req.params.partiId
            });
        }
        res.send({message: "parti deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "parti not found with id " + req.params.partiId
            });                
        }
        return res.status(500).send({
            message: "Could not delete parti with id " + req.params.partiId
        });
    });
};
