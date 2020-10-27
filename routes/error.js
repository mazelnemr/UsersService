// Imported Modules
// Node Modules

// 3rd party Modules
const express = require('express');

// Internal Modules
const errorController = require('../controllers/error');

//---------------------------------------------------// Page Break
//Declarations
const router = express.Router();

//---------------------------------------------------// Page Break

router.use(errorController.get404);





module.exports = router;