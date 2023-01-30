const express = require('express');
const bcrypt = require('bcrypt');
const mongoose= require('mongoose');
const nodemailer= require('nodemailer');

var router=express.Router();
var ObjectID = require('mongoose').Types.ObjectId;

var {Admin} = require('../models/Admin');
var {Depense} = require('../models/Depense');
var {ReparationVoiture} = require('../models/ReparationVoiture');
var {Utilisateur} = require('../models/Utilisateur');

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
    console.log("desce:"+req.body.desce);
    var data=ReparationVoiture.findOneAndUpdate(
        {
            "listeVoiture.numero" : req.body.numero,
            "listeVoiture.listeDepot.date": req.body.dateDepot
        },
        {
            $push:{
                "listeVoiture.$[elem].listeDepot.$[elem2].listeRep":{
                    id: new mongoose.Types.ObjectId(),
                    desce: req.body.desce,
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
                {"elem2.date": req.body.dateDepot}
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

router.put('/receptionDepot',(req,res)=>{
    var data=ReparationVoiture.findOneAndUpdate(
        {
            "listeVoiture.numero" : req.body.numero,
            "listeVoiture.listeDepot.date": req.body.dateDepot
        },
        {
            $set:{
                "listeVoiture.$[elem].listeDepot.$[elem2].respAtelier":req.body.login, 
                "listeVoiture.$[elem].listeDepot.$[elem2].dateReception": new Date(),
                "listeVoiture.$[elem].listeDepot.$[elem2].etat": 2
            },
        },
        {
            arrayFilters:[
                {"elem.numero": req.body.numero},
                {"elem2.date": req.body.dateDepot}
            ],
        },function(err,docs){
            if(err){
                console.log(err);
                res.status(400).json({statusText: 'Bad request',message: err.message});
            }else{
                console.log(docs);
                res.status(200).json({message: 'Reception reussie',data: docs});
            }
        }
    );
});

router.put('/cloturerDepot',(req,res)=>{
    var data=ReparationVoiture.findOneAndUpdate(
        {
            "listeVoiture.numero" : req.body.numero,
            "listeVoiture.listeDepot.date": req.body.dateDepot
        },
        {
            $set:{
                "listeVoiture.$[elem].listeDepot.$[elem2].dateSortie": new Date(),
                "listeVoiture.$[elem].listeDepot.$[elem2].etat": 3
            },
        },
        {
            arrayFilters:[
                {"elem.numero": req.body.numero},
                {"elem2.date": req.body.dateDepot}
            ],
        },function(err,docs){
            if(err){
                console.log(err);
                res.status(400).json({statusText: 'Bad request',message: err.message});
            }else{
                console.log(docs);
                res.status(200).json({message: 'Sortie reussie',data: docs});
            }
        }
    );
});

router.put('/recupererVoiture',(req,res)=>{
    var data=ReparationVoiture.findOneAndUpdate(
        {
            "listeVoiture.numero" : req.body.numero,
            "listeVoiture.listeDepot.date": req.body.dateDepot
        },
        {
            $set:{
                "listeVoiture.$[elem].listeDepot.$[elem2].dateRecuperation": new Date(),
                "listeVoiture.$[elem].listeDepot.$[elem2].etat": 4
            },
        },
        {
            arrayFilters:[
                {"elem.numero": req.body.numero},
                {"elem2.date": req.body.dateDepot}
            ],
        },function(err,docs){
            if(err){
                console.log(err);
                res.status(400).json({statusText: 'Bad request',message: err.message});
            }else{
                console.log(docs);
                res.status(200).json({message: 'Recuperation reussie',data: docs});
            }
        }
    );
});

router.put('/terminerReparation',(req,res)=>{
    var data=ReparationVoiture.findOneAndUpdate(
        {
            "listeVoiture.numero" : req.body.numero,
            "listeVoiture.listeDepot.date": req.body.dateDepot,
            "listeVoiture.listeDepot.listeRep.desce": req.body.desce
        },
        {
            $set:{
                "listeVoiture.$[elem].listeDepot.$[elem2].listeRep.$[elem3].etat": 2
            },
        },
        {
            arrayFilters:[
                {"elem.numero": req.body.numero},
                {"elem2.date": req.body.dateDepot},
                {"elem3.desce": req.body.desce}
            ],
        },function(err,docs){
            if(err){
                console.log(err);
                res.status(400).json({statusText: 'Bad request',message: err.message});
            }else{
                console.log(docs);
                res.status(200).json({message: 'Reparation terminé avec succes',data: docs});
            }
        }
    );
});

//pour termnier 3, receptionner 4, valider bon de sortie 5
router.put('/changerEtatDeposition',(req,res)=>{
    var data=ReparationVoiture.findOneAndUpdate(
        {
            "listeVoiture.numero" : req.body.numero,
            "listeVoiture.listeDepot.date": new Date(req.body.dateDepot),
        },
        {
            $set:{
                "listeVoiture.$[elem].listeDepot.$[elem2].etat": Number(req.body.etat)
            },
        },
        {
            arrayFilters:[
                {"elem.numero": req.body.numero},
                {"elem2.date": new Date(req.body.dateDepot)},
            ],
        },function(err,docs){
            if(err){
                console.log(err);
                res.status(400).json({statusText: 'Bad request',message: err.message});
            }else{
                console.log(docs);
                res.status(200).json({message: 'Operation effectuée avec succes',data: docs});
            }
        }
    );
});

router.post('/envoieMail', (req, res) => {
    var adm = new Utilisateur({
        email: req.body.email,
        mdp: req.body.mdp
    });
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "laetitiarabibizaka@gmail.com",
          pass: "xogclqknyqzzzfqy",
        },
        tls: {
        rejectUnauthorized: false
        }
    });
let info = transporter.sendMail({
        from: "laetitiarabibizaka@gmail.com",
        to:  req.body.login, 
        subject: "Recuperation de voiture",
        html: "<p>La réparation de votre véhicule : "+req.body.numero+" est terminée. Vous pouvez venir la récuperer.</p>"
 });
    res.send('{"msg": "mail envoyé"}');
});

router.get('/voiture/:matricule',(req,res)=>{
    const varUnwind = { $unwind: "$listeVoiture" };
    const varMatch = {
        $match: {
            "listeVoiture.numero": req.params.matricule,
        },
    };
    ReparationVoiture.aggregate([varUnwind, varMatch], function(err,docs){
        if(err){
            console.log(err);
            res.status(400).json({message: err.message,error: err.message})
        }else{
            res.status(200).json({data: docs})
        }
    });
});

router.get('/voitures/',(req,res)=>{
    ReparationVoiture.find({}, function(err,docs){
        if(err){
            console.log(err);
            res.status(400).json({message: err.message,error: err.message})
        }else{
            res.status(200).json({data: docs})
        }
    });
});

router.put('/genererFacture',(req,res)=>{
    var data=ReparationVoiture.findOneAndUpdate(
        {
            "listeVoiture.numero" : req.body.numero,
            "listeVoiture.listeDepot.date": req.body.dateDepot,
        },
        {
            $set:{
                "listeVoiture.$[elem].listeDepot.$[elem2].facture":{
                    id: new mongoose.Types.ObjectId(),
                    date: new Date(),
                    montant: Number(req.body.montant),
                    respFinance: req.body.login,
                    etat: 1
                },
                "listeVoiture.$[elem].listeDepot.$[elem2].etat": 5
            },
        },
        {
            arrayFilters:[
                {"elem.numero": req.body.numero},
                {"elem2.date": req.body.dateDepot},
            ],
        },function(err,docs){
            if(err){
                console.log(err);
                res.status(400).json({statusText: 'Bad request',message: err.message});
            }else{
                console.log(docs);
                res.status(200).json({message: 'Facture generée avec succes',data: docs});
            }
        }
    );
});

router.put('/payerFacture',(req,res)=>{
    var data=ReparationVoiture.findOneAndUpdate(
        {
            "listeVoiture.numero" : req.body.numero,
            "listeVoiture.listeDepot.date": req.body.dateDepot,
        },
        {
            $set:{
                "listeVoiture.$[elem].listeDepot.$[elem2].facture.etat": 2
            },
        },
        {
            arrayFilters:[
                {"elem.numero": req.body.numero},
                {"elem2.date": req.body.dateDepot},
            ],
        },function(err,docs){
            if(err){
                console.log(err);
                res.status(400).json({statusText: 'Bad request',message: err.message});
            }else{
                console.log(docs);
                res.status(200).json({message: 'Facture payée avec succes',data: docs});
            }
        }
    );
});

router.post('/saisieDepense',(req,res)=>{
    var dep=new Depense({
        desce: req.body.desce,
        date: req.body.date,
        montant: req.body.montant,
        etat: 1
    });

    dep.save().then(()=>{
        res.status(200).json({message: "Dépense créé avec succes", data: dep})
    })
    .catch((error)=>{
        let errMsg=error.message;
        if(error.code=11000){
            errMsg='erreur lors de l`insertion';
        }
        res.status(400).json({statusText: 'Bad request',message: errMsg});
    })
});

router.get('/listedepense/',(req,res)=>{
    Depense.find({}, function(err,docs){
        if(err){
            console.log(err);
            res.status(400).json({message: err.message,error: err.message})
        }else{
            res.status(200).json({data: docs})
        }
    });
});
module.exports = router;
