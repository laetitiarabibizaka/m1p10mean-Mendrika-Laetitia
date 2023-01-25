const mongoose = require("mongoose");
const validator = require("validator");

var Utilisateur = mongoose.model('Utilisateur',{
    id: {type: String},
    nom: {type: String},
    prenom: {type: String},
    contact: {type: String},
    login: {type: String,unique: true,validator(v){
        if(!validator.isEmail(v))throw new Error("Email invalide");
    }},
    mdp: {type: String}
});

module.exports={Utilisateur};