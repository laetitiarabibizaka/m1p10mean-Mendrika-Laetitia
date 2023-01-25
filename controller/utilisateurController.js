const express = require('express');
const bcrypt = require('bcrypt');

var router=express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Utilisateur} = require('../models/Utilisateur');
var {ReparationVoiture} = require('../models/ReparationVoiture');
var {Voiture} = require('../models/Voiture');


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
    Utilisateur.findOne({login: req.body.login}, function(err,docs){
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

router.get('/voitures',(req,res)=>{
    ReparationVoiture.find({id: req.body.idUser}, function(err,docs){
        if(err){
            console.log(err);
            res.status(400).json({message: err.message,error: err.message})
        }else{
            res.status(200).json({data: docs})
        }
    });
});

router.post('/ajoutVoiture',(req,res) => {
    ReparationVoiture.find({id: req.body.idUser}, function(err,docs){
        if(err){
            console.log(err);
            res.status(400).json({message: err.message,error: err.message})
        }else{
            var voiture = new Voiture({
                numero: req.body.voiture.numero,
                marque : req.body.voiture.marque,
                modele: req.body.voiture.modele,
                listeDepot: []
            });

            voiture.save().then(()=>{
                if(docs.length>0){
                    console.log(docs);
                    docs[0].listeVoiture.push(voiture);
                    docs[0].save();
                    res.status(200).json({message: "Voiture ajoutée avec succes", data: docs[0]})
                }else{
                    var repVoiture=new ReparationVoiture({
                        id: req.body.idUser,
                        nom: req.body.nom,
                        prenom: req.body.prenom,
                        contact: req.body.contact,
                        login: req.body.login,
                        listeVoiture: [voiture]
                    });
    
                    repVoiture.save().then(()=>{
                        res.status(200).json({message: "Voiture ajoutée avec succes", data: repVoiture})
                    })
                    .catch((error)=>{
                        let errMsg=error.message;
                        console.log(error);
                        res.status(400).json({statusText: 'Bad request',message: errMsg});
                    })
                }
            })
            .catch((error)=>{
                let errMsg=error.message;
                console.log(error);
                res.status(400).json({statusText: 'Bad request',message: errMsg});
            })
        }
    });
});

module.exports = router;