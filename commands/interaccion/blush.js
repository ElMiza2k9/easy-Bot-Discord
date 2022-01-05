const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
const star = require('star-labs');
module.exports = { // Exportamos un modulo de node
    name: "blush",
    alt: [],
    category: "Interaccion",
    description: "Sonrojate!",
    usage: "blush",

go: (client, message, args) => {

    const user = message.author;

    const embed = new MessageEmbed()

    .setColor("RANDOM")
    .setDescription(user.username+" Se sonrojo!😳")
    .setImage(star.blush())
    .setTimestamp()

    message.channel.send({ embeds: [embed] })

},
}