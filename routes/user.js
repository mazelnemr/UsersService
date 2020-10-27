// Imported Modules
// Node Modules

// 3rd party Modules
const express = require('express');

// Internal Modules
const usersController = require('../controllers/users');

//---------------------------------------------------// Page Break
//Declarations
const router = express.Router();
//---------------------------------------------------// Page Break

// Create new User
// router.post('/add-user', usersController.postAddUser);

// Get all Users
router.get('/users', usersController.getUsers)

// Get User by Id
router.get('/users/:id', usersController.getUserId)

// Delete User by Id
router.get('/users/del/:id', usersController.delUserId)

// Update User by Id
router.put('/users/update/:id', usersController.updateUser)

// get users by type




module.exports = router;
