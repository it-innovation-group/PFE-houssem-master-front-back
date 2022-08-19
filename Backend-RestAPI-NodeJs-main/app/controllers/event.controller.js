const Event = require('../models/event.model.js');

// Create and Save a new event
exports.create = (req, res) => {
  

    // Create a event
    const event = new Event({
         idee:  req.body.idee|| "Untitled Event",
        email:  req.body.email,
        nameev:  req.body.nameev,
        descri: req.body.descri,
        nbrep:  req.body.nbrep,
        nbreo :  req.body.nbreo
    });

    // Save event in the database
    event.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the event."
        });
    });
};

// Retrieve and return all event from the database.
exports.findAll = (req, res) => {
    Event.find()
    .then(events => {
        res.send(events);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving events."
        });
    });
};

// Find a single event with a eventId
exports.findOne = (req, res) => {
    Event.findById(req.params.eventId)
    .then(event => {
        if(!event) {
            return res.status(404).send({
                message: "event not found with id " + req.params.eventId
            });            
        }
        res.send(event);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "event not found with id " + req.params.eventId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving event with id " + req.params.eventId
        });
    });
};

// Update a event identified by the eventId in the request
exports.update = (req, res) => {
    
   

    // Find event and update it with the request body
    Event.findByIdAndUpdate(req.params.eventId, {
        idee:  req.body.idee|| "Untitled Event",
        email:  req.body.email,
        nameev:  req.body.nameev,
        descri: req.body.descri,
        nbrep:  req.body.nbrep,
        nbreo :  req.body.nbreo
    }, {new: true})
    .then(event => {
        if(!event) {
            return res.status(404).send({
                message: "event not found with id " + req.params.eventId
            });
        }
        res.send(event);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "event not found with id " + req.params.eventId
            });                
        }
        return res.status(500).send({
            message: "Error updating event with id " + req.params.eventId
        });
    });
};

// Delete a event with the specified eventId in the request
exports.delete = (req, res) => {
    Event.findByIdAndRemove(req.params.eventId)
    .then(event => {
        if(!event) {
            return res.status(404).send({
                message: "event not found with id " + req.params.eventId
            });
        }
        res.send({message: "event deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "event not found with id " + req.params.eventId
            });                
        }
        return res.status(500).send({
            message: "Could not delete event with id " + req.params.eventId
        });
    });
};
