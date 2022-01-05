const mongoose = require("mongoose")

const warnSchema = new mongoose.Schema({
    guildId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    warnings: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('moderacion', warnSchema)