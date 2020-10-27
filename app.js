// Imported Modules
// Node Modules

// 3rd party Modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Internal Modules
const userRoutes = require('./routes/user');
const internalUserRoutes = require('./routes/subUser/internalUser')
const externalUserRoutes = require('./routes/subUser/externalUser')
const errorRoutes = require('./routes/error');

//---------------------------------------------------// Page Break
mongoose.connect('mongodb+srv://mazen:tiger95@cluster0.gytsy.mongodb.net/usersService?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: false }, () => {
    console.log('db Connected');
});

//Declarations
const app = express();

//--- Utilities ---//
// this is used for the double request that happens when reloading a page
app.get('/favicon.ico', (req, res) => res.status(204));

//---------------------------------------------------// Page Break
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', userRoutes);
app.use('/internal_user', internalUserRoutes);
app.use('/external_user', externalUserRoutes);
app.use(errorRoutes);



app.listen(3000);






















