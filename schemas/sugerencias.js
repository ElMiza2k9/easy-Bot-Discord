const mongoose = require("mongoose")

const sistemaDeSugerencias = new mongoose.Schema({
    serverId: String,
    canalId: String
})

module.exports = mongoose.model("Sugerencias", sistemaDeSugerencias );