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

function normalizePort(val) {
    let port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }

const port = normalizePort(process.env.PORT || '3000');
app.use('/**',index);
app.listen(port, () => console.log('Server started at port :'+port));