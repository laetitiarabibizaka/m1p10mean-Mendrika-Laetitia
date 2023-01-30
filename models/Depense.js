const mongoose = require("mongoose");

var Depense = mongoose.model('Depense',{
    id: {type: String},
    desce: {type: String},
    date: {type: Date},
    montant: {type: Number},
    etat: {type: Number}
});

module.exports={Depense};
