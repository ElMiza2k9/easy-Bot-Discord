const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
const star = require("star-labs")
module.exports = { // Exportamos un modulo de node
    name: "dance",
    alt: [],
    category: "Interaccion",
    description: "Baila!",
    usage: "dance",

go: (client, message, args) => {

    const user = message.author
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(user.username+" Esta bailando!")
    .setImage(star.dance())
    .setTimestamp()

    message.channel.send({ embeds: [embed] })
},
}