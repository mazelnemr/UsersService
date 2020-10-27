// Imported Modules
// Node Modules

// 3rd party Modules
const express = require('express');

// Internal Modules
const internalUsersController = require('../../controllers/subUsers/internalUser')

//---------------------------------------------------// Page Break
//Declarations
const router = express.Router();
//---------------------------------------------------// Page Break

// Create new User
router.post('/add_user', internalUsersController.postAddUser);

// // Get all Users
router.get('/users', internalUsersController.getUsers)

// // Get User by Id
// router.get('/users/:id', usersController.getUserId)

// // Delete User by Id
// router.get('/users/del/:id', usersController.delUserId)

// // get users by type




module.exports = router;
