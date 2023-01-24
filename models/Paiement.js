const mongoose = require("mongoose");

var Paiement = mongoose.model('Paiement',{
    id: {type: String},
    date: {type: Date},
    montant: {type: Number},
    respFinance: {type: Object},
    etat: {type: Number}
});

module.exports={Paiement};