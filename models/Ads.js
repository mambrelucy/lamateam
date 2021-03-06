var mongoose = require('mongoose');
const AdSchema = mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    profilepic: { type: String, required: true },
    description: { type: String, required: true },
    skills_need: { type: Array, required: true },
    nb_person: { type: Number, required: true },
});

module.exports = mongoose.model('Ads', AdSchema);