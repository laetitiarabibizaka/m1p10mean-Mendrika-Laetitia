const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

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

router.get('/voitures/:iduser',(req,res)=>{
    console.log(req.params.iduser);
    ReparationVoiture.find({login: req.params.iduser}, function(err,docs){
        if(err){
            console.log(err);
            res.status(400).json({message: err.message,error: err.message})
        }else{
            res.status(200).json({data: docs})
        }
    });
});

router.get('/fichevoiture/:matricule',(req,res)=>{
    console.log(req.params.matricule);
    Voiture.find({numero: req.params.matricule}, function(err,docs){
        if(err){
            console.log(err);
            res.status(400).json({message: err.message,error: err.message})
        }else{
            res.status(200).json({data: docs})
        }
    });
});

router.get('/recherchevoiture/:iduser/:matricule',(req,res)=>{
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

router.post('/ajoutVoiture',(req,res) => {
    ReparationVoiture.find({login: req.body.login}, function(err,docs){
        if(err){
            console.log(err);
            res.status(400).json({message: err.message,error: err.message})
        }else{
            var voiture = new Voiture({
                numero: req.body.numero,
                marque : req.body.marque,
                modele: req.body.modele,
                listeDepot: [],
                listePhoto: [],
                etat: 0
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

/*router.post('/envoieMail', (req, res) => {
    var adm = new Utilisateur({
        email: req.body.email,
        mdp: req.body.mdp
    });
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "anitatantely@gmail.com", // generated ethereal user
          pass: "xzdsopensecdlmtt", // generated ethereal password
        },
        tls: {
        rejectUnauthorized: false
        }
    });
let info = transporter.sendMail({
        from: "anitatantely@gmail.com", // sender address
        to:  req.body.email, // list of receivers
        subject: "Confirmation de compte ", // Subject line
        //text: "Veuillez cliquez sur le lien pour vous connecter SVP : http://localhost:4200/navbar ", // plain text body
        //html: "Veuillez cliquez sur le lien pour vous connecter SVP : http://localhost:4200/navbar ", // html body
        html: "eto n html no atao "
 });
    res.send('{"msg": "mail envoyer"}');
});*/

router.put('/deposerReparation/',(req,res)=>{
    var id = new mongoose.Types.ObjectId();
    const updateDoc = {
        $push:{
            "listeVoiture.$.listeDepot":{
                id: id,
                date: req.body.date,
                commentaire: req.body.commentaire,
                respAtelier: null,
                dateReception: null,
                listeRep: [],
                dateSortie: null,
                dateRecuperation: null,
                facture: null,
                etat: 1
            }
        },
    };

    ReparationVoiture.updateOne({"listeVoiture.numero": req.body.numero, "login": req.body.login},updateDoc,function(err,docs){
        if(err){
            console.log(err);
            res.status(400).json({statusText: 'Bad request',message: err.message});
        }else{
            console.log(docs);
            res.status(200).json({message: 'Deposition reussie',data: docs[0]});
        }
    });
});

module.exports = router;