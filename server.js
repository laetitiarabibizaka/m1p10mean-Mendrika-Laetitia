const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const { mongoose } = require('./database/db.js');
var utilisateurController = require('./controller/utilisateurController');
var reparationController = require('./controller/reparationController');
var marqueController = require('./controller/marqueController');
var adminController = require('./controller/adminController');
var index = require('./routes/index');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.use(express.static(path.join(__dirname, 'views')));

app.use('/client', utilisateurController);
app.use('/reparation',reparationController);
app.use('/marque',marqueController);
app.use('/admin',adminController);

app.use('/**',index);
app.listen(80, () => console.log('Server started at port : 3000'));