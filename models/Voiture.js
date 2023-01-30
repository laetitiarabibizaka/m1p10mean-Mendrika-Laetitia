const mongoose = require("mongoose");

var Voiture = mongoose.model('Voiture',{
    id: {type: String},
    numero : {type: String},
    marque: {type: String},
    modele: {type: String},
    listeDepot: {type: Array},
    listePhoto: {type: Array}
});

module.exports={Voiture};

