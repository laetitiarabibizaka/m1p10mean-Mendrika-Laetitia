const express = require('express');
const bcrypt = require('bcrypt');

var router=express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Admin} = require('../models/Admin');

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

module.exports = router;
