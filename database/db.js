const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/Garage',(err)=>{
    if(!err)
        console.log('Connection MongoDB reussie');
    else
        console.log('Erreur de connection : '+JSON.stringify(err,undefined,2));
});

module.exports = mongoose;