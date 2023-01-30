const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://mendrika:AogF5RBEFKO42Fwy@cluster0.sywvem2.mongodb.net/garage',(err)=>{
    if(!err)
        console.log('Connection MongoDB reussie');
    else
        console.log('Erreur de connection : '+JSON.stringify(err,undefined,2));
});

module.exports = mongoose;