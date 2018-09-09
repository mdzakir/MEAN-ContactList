const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

// Fetching the list
router.get('/contacts', (req, res, next) => {
    Contact.find(function(err, contacts) {
       res.json(contacts); 
    });
});

// add contact
router.post('/contact', (req, res, next) => {
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        contact_number: req.body.contact_number
    });
    newContact.save((err, contact) => {
        if(err){
            res.json({success: false, msg: 'Failed to save contact'});
        } else {
            res.json({success: true, msg: 'Contact saved successfully!'});
        }
    });
});

// delete contact
router.delete('/contact/:id', (req, res, next) => {
    Contact.remove({_id: req.params.id}, (err, result) => {
      if(err){
        res.json(err);
      } else {
          res.json(result);
      }
    });
});

module.exports = router;