const express = require('express');
var router=express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Marque} = require('../models/Marque');

router.get('/',(req,res)=>{
    Marque.find((err,docs) => {
        if(!err){res.send(docs);}
        else {console.log('Erreur recherche Marque : '+JSON.stringify(err,undefined,2)); }
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Pas de resultat trouvé pour id: ${req.params.id}`);
    Marque.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Erreur select Marque : '+JSON.stringify(err,undefined,2));}
    });

});

router.post('/',(req,res)=>{
    var rep=new Marque({
        desce: req.body.desce,
    });
    rep.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Erreur dans l\'insertion de Marque: '+JSON.stringify(err,undefined,2)); }
    });
});

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('Pas de donnees pour cet id');

    var rep = {
        desce : req.body.desce,
    }
    Marque.findByIdAndUpdate(req.params.id,{$set:rep},{new:true}, (err,doc) => {
        if(!err){res.send(doc);}
        else{console.log('Erreur dans l\'update : '+JSON.stringify(err,undefined,2)); }
    });
});

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('Marque: Pas de donnees pour cet id');
    Marque.findByIdAndRemove(req.params.id, (err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Erreur dans DELETE Marque: '+JSON.stringify(err,undefined,2)); }
    })
});

module.exports = router;