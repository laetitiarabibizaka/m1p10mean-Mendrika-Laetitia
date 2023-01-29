const express = require('express');
const bcrypt = require('bcrypt');
const mongoose= require('mongoose');

var router=express.Router();
var ObjectID = require('mongoose').Types.ObjectId;

var {Admin} = require('../models/Admin');
var {ReparationVoiture} = require('../models/ReparationVoiture');

router.post('/createAdmin',(req,res)=>{
    var user=new Admin({
        login: req.body.login,
        mdp: bcrypt.hashSync(req.body.mdp,8),
        role: Number(req.body.role)
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
    Admin.findOne({login: req.body.login, role: Number(req.body.role)}, function(err,docs){
        if(err || docs==null){
            console.log(err);
            res.status(400).json({statusText: 'Bad request',message: 'Login ou mot de passe erroné'});
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

router.put('/ajoutReparation',(req,res)=>{
    console.log("desce:"+req.body.description);
    var data=ReparationVoiture.findOneAndUpdate(
        {
            "listeVoiture.numero" : req.body.numero,
            "listeVoiture.listeDepot.date": new Date(req.body.dateDepot)
        },
        {
            $push:{
                "listeVoiture.$[elem].listeDepot.$[elem2].listeRep":{
                    id: new mongoose.Types.ObjectId(),
                    desce: req.body.description,
                    pu: Number(req.body.pu),
                    qte: Number(req.body.qte),
                    montant: Number(req.body.pu)*Number(req.body.qte),
                    etat: 1 
                }
            },
        },
        {
            arrayFilters:[
                {"elem.numero": req.body.numero},
                {"elem2.date": new Date(req.body.dateDepot)}
            ],
        },function(err,docs){
            if(err){
                console.log(err);
                res.status(400).json({statusText: 'Bad request',message: err.message});
            }else{
                console.log(docs);
                res.status(200).json({message: 'Ajout de réparation reussie',data: docs});
            }
        }
    );
});
module.exports = router;
