const mongoose = require("mongoose");

var Utilisateur = mongoose.model('Utilisateur',{
    id: {type: String},
    nom: {type: String},
    prenom: {type: String},
    contact: {type: String},
    login: {type: String},
    mdp: {type: String}
});

module.exports={Utilisateur};