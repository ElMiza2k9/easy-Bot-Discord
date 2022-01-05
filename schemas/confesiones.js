const mongoose = require("mongoose")

const sistemaDeConfesiones = new mongoose.Schema({
    guildId: String,
    canalId: String
});

module.exports = mongoose.model("Confesiones", sistemaDeConfesiones);