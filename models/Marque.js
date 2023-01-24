const mongoose = require("mongoose");

var Marque = mongoose.model('Marque',{
    id: {type: String},
    desce: {type: String}
});

module.exports={Marque};
