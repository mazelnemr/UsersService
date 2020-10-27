// Imported Modules
// Node Modules

// 3rd party Modules
const mongoose = require('mongoose');

// Internal Modules


//---------------------------------------------------// Page Break
//Declarations

const baseOptions = {
    discriminatorKey: 'userType',
    collection: 'users',
    timestamps: true
}

// const userSchema = mongoose.Schema({
//     firstName: {type: String, required: true},
//     lastName: {type: String, required: true},
//     email: {type: String},
//     phoneNumber: [{type: String, required: true}]
// },{ timestamps: true});

const baseUser = mongoose.model('baseUser', new mongoose.Schema({
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String},
        phoneNumber: [{type: String, required: true}]
        }, baseOptions,
    ),
);
//---------------------------------------------------// Page Break

module.exports = mongoose.model('baseUser');

