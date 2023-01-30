const mongoose = require("mongoose");

var Facture = mongoose.model('Facture',{
    id: {type: String},
    date: {type: Date},
    montant: {type: Number},
    paiement: {type: Array}
});

module.exports={Facture};