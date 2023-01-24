const express = require('express');
var router=express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Reparation} = require('../models/Reparation');

router.get('/',(req,res)=>{
    Reparation.find((err,docs) => {
        if(!err){res.send(docs);}
        else {console.log('Erreur recherche Reparation : '+JSON.stringify(err,undefined,2)); }
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Pas de resultat trouvé pour id: ${req.params.id}`);
    Reparation.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Erreur select Reparation : '+JSON.stringify(err,undefined,2));}
    });

});

router.post('/',(req,res)=>{
    var rep=new Reparation({
        desce: req.body.desce,
        pu: req.body.pu,
    });
    rep.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Erreur dans l\'insertion de Reparation: '+JSON.stringify(err,undefined,2)); }
    });
});

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('Pas de donnees pour cet id');

    var rep = {
        desce : req.body.desce,
        pu : req.body.pu,
    }
    Reparation.findByIdAndUpdate(req.params.id,{$set:rep},{new:true}, (err,doc) => {
        if(!err){res.send(doc);}
        else{console.log('Erreur dans l\'update : '+JSON.stringify(err,undefined,2)); }
    });
});

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('Reparation: Pas de donnees pour cet id');
    Reparation.findByIdAndRemove(req.params.id, (err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Erreur dans DELETE Reparation: '+JSON.stringify(err,undefined,2)); }
    })
});

module.exports = router;