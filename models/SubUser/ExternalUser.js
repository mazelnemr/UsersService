const mongoose = require('mongoose');
const baseUser = require('../User');

const ExternalUser = baseUser.discriminator('ExternalUser', new mongoose.Schema({
    address: String
}));

module.exports = mongoose.model('ExternalUser');
