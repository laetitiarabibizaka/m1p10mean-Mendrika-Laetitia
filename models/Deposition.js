const mongoose = require("mongoose");

var Deposition = mongoose.model('Reparation',{
    id: {type: String},
    date: {type: Date},
    commentaire: {type: String},
    respAtelier: {type: Object},
    dateReception: {type: Date},
    listeRep: {type: Array},
    dateSortie: {type: Date},
    dateRecuperation: {type: Date},
    facture: {type: Object}
});

module.exports={Deposition};