const express = require('express');
const bcrypt = require('bcrypt');

var router=express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Utilisateur} = require('../models/Utilisateur');


router.get('/',(req,res)=>{
    Utilisateur.find((err,docs) => {
        if(!err){res.send(docs);}
        else {console.log('Erreur recherche Utilisateur : '+JSON.stringify(err,undefined,2)); }
    });
});

router.post('/createUser',(req,res)=>{
    var user=new Utilisateur({
        nom: req.body.nom,
        prenom: req.body.prenom,
        contact: req.body.contact,
        login: req.body.login,
        mdp: bcrypt.hashSync(req.body.mdp,8)
    });

    user.save().then(()=>{
        user.mdp=null;
        res.status(200).json({message: "Compte créé avec succes", data: user})
    })
    .catch((error)=>{
        let errMsg=error.message;
        if(error.code=11000){
            errMsg='Login deja associé à un compte';
        }
        res.status(400).json({statusText: 'Bad request',message: errMsg});
    })
});

router.post('/traitementLogin', (req, res) => {

    Utilisateur.find({ login: req.body.login, mdp: req.body.mdp }, function (err, docs) {
        if (err){
            console.log(err);
            res.status(400).json({message: 'Login ou  mot de passe erroné',error: 'Login ou  mot de passe erroné'})
        }
        else{
            docs[0].mdp=null;
            res.status(200).json({data: docs[0]})
        }
    });
});

module.exports = router;