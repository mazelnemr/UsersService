const mongoose = require('mongoose');
const baseUser = require('../User');

const InternalUser = baseUser.discriminator('InternalUser', new mongoose.Schema({
    nationalId: String,
    contractNum: String
}));

module.exports = mongoose.model('InternalUser');