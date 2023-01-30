const mongoose = require("mongoose");

mongoose.connect('mongodb://mongo:oFVDLrGnqM2E1xWvki3K@containers-us-west-61.railway.app:7232',(err)=>{
    if(!err)
        console.log('Connection MongoDB reussie');
    else
        console.log('Erreur de connection : '+JSON.stringify(err,undefined,2));
});

module.exports = mongoose;