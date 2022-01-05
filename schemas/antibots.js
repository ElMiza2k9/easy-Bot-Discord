const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    guildId: String,
    antibots: String,

});

module.exports = mongoose.model("antibots", Schema);