const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./database/db.js');
var utilisateurController = require('./controller/utilisateurController');
var reparationController = require('./controller/reparationController');
var marqueController = require('./controller/marqueController');
var adminController = require('./controller/adminController');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/client', utilisateurController);
app.use('/reparation',reparationController);
app.use('/marque',marqueController);
app.use('/admin',adminController);