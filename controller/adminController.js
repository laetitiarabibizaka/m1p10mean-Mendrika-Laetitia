const express = require('express');
const bcrypt = require('bcrypt');

var router=express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Admin} = require('../models/Admin');

router.post('/traitementLogin', (req, res) => {
    Admin.findOne({login: req.body.login}, function(err,docs){
        if(err || docs==null){
            console.log(err);
            res.status(400).json({statusText: 'Bad request',message: 'Login inexistant'});
        }else{
            var isValidate=bcrypt.compareSync(req.body.mdp,docs.mdp);
            if(isValidate){
                docs.mdp=null;
                res.status(200).json({message: 'ok',data: docs,ok: true});
            }else{
                res.status(400).json({statusText: 'Bad request',message: 'Login ou mot de passe erroné'});
            }
        }
    });
});
