const mongoose = require("mongoose");

var ReparationVoiture = mongoose.model('ReparationVoiture',{
    id: {type: String},
    nom: {type: String},
    prenom: {type: String},
    contact: {type: String},
    login: {type: String},
    mdp: {type: String},
    listeVoiture: {type: Array}
});

module.exports = {ReparationVoiture};