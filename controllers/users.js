// Imported Modules
// Node Modules

// 3rd party Modules

// Internal Modules
const User = require('../models/User');

//---------------------------------------------------// Page Break
//Declarations
 
//---------------------------------------------------// Page Break


// Get all Users
exports.getUsers = (req, res, next) => {
    User.find().then((users) => {
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

// Get User by Id
exports.getUserId = (req, res, next) => {
    User.findById(req.params.id).then((user) => {
        if(user){
            res.json({
                userType: user.userType,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phoneNumber: user.phoneNumber
            });
        }else{
            res.sendStatus(404);
        };
    }).catch((err) => {
        if(err){
            throw err;
        };
    });
};

// Delete User by Id
exports.delUserId = (req, res, next) => {
    User.findByIdAndDelete(req.params.id).then(() => {
        res.json("User Deleted");
    }).catch((err) => {
        if(err){
            throw err;
        };
    });
};

// Update User by Id
exports.updateUser = (req, res, next) => {
    User.findById((req.params.id), (err, user) => {
        if(err) {
            console.log(err);
            res.status(500);
        } else {
            if(!user) {
                res.status(404);
            } else {
                if (req.body.firstName) {
                    user.firstName = req.body.firstName;
                }
                if (req.body.lastName) {
                    user.lastName = req.body.lastName;
                }
                if (req.body.email) {
                    user.email = req.body.email;
                }
                if (req.body.phoneNumber) {
                    user.phoneNumber = req.body.phoneNumber;
                }
                if (req.body.address) {
                    user.address = req.body.address;
                }
                if (req.body.nationalId) {
                    user.nationalId = req.body.nationalId;
                }
                if (req.body.contractNum) {
                    user.contractNum = req.body.contractNum;
                }

                user.save((err, user) => {
                    if(err) {
                        console.log(err);
                        res.status(500);
                    } else {
                        res.json({
                            userType: user.userType,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            address: user.address,
                            phoneNumber: user.phoneNumber
                        });
                        // res.json(user);
                    }

                });
            }
        }
    });
}




























//---------------------------------------------------// Page Break
// old working snippets


// exports.getUsers = (req, res, next) => {
//     User.find().then((users) => {  
//         res.json(users)
//     }).catch((err) => {
//         if(err){
//             throw err;
//         }
//     });
// };


// exports.delUserId = (req, res, next) => {
//     User.findById(req.params.id).then((user) => {
//         if(user){
//             user.deleteOne({ _id: req.params.id})
//             res.json("User Deleted");
//         }else{
//             res.sendStatus(404);
//         }
//     }).catch((err) => {
//         if(err){
//             throw err;
//         }
//     });
// };


// Create new User
// exports.postAddUser = (req, res, next) => {
//     const newUser = new User({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         phoneNumber: req.body.phoneNumber,

//     }).save();
//     // newUser.save();
//     res.status(201).json({
//         message: "User Added Successfully"
//     });
// };