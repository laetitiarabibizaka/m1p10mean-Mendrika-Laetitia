const express = require('express');
var router=express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Utilisateur} = require('../models/Utilisateur');

router.post('/traitementLogin', (req, res) => {
    var adm = new Utilisateur({
        login: req.body.login,
        mdp: req.body.mdp
    });
    Utilisateur.find({ email: req.body.login, mdp: req.body.mdp }, function (err, docs) {
        if (err){
            console.log(err);
            res.send(err);
        }
        else{
            if(docs.length == 1) {
                res.send(docs[0])
            } else {
                res.send(docs[0])
            }
        }
    });
});

module.exports = router;