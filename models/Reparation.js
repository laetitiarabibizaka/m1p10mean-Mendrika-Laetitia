const mongoose = require("mongoose");

var Reparation = mongoose.model('Reparation',{
    id: {type: String},
    desce: {type: String},
    pu: {type: Number},
    qte: {type: Number},
    montant: {type: Number},
    etat: {type: Number}
});

module.exports = {Reparation};