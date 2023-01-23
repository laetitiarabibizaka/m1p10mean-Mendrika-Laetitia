const mongoose = require("mongoose");

var Admin = mongoose.model('Admin',{
    id: {type: String},
    login: {type: String},
    mdp: {type: String},
    role: {type: Number}
});

module.exports={Admin};
