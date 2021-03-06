// Imported Modules
// Node Modules

// 3rd party Modules

// Internal Modules
const ExternalUser = require('../../models/SubUser/externalUser');

//---------------------------------------------------// Page Break
//Declarations
 
//---------------------------------------------------// Page Break

// Create new User
exports.postAddUser = (req, res, next) => {
    const newUser = new ExternalUser({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address

    }).save((err, newUser) => {
        if (err) {
            res.status(500).send(err.message)
            console.log(err)
        } else {
            res.status(201).json({
                message: "User Added Successfully",
                newUser: newUser
            
            });
        }
    });
};

// Get all Users
exports.getUsers = (req, res, next) => {
    ExternalUser.find().then((users) => {
        var userMap = {};

        users.forEach((user) => {
        userMap[user._id] = {
            userType: user.userType,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber
            };
        });
        
        res.json(userMap)
    }).catch((err) => {
        if(err){
            throw err;
        };
    });
};