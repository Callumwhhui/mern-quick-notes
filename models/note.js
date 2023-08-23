const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('note', noteSchema)