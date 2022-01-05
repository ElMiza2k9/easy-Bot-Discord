const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
const star = require("star-labs")
module.exports = { // Exportamos un modulo de node
    name: "happy",
    alt: [],
    category: "Interaccion",
    description: "Demuestra que estas feliz!",
    usage: "happy",

go: (client, message, args) => {

    const user = message.author
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(user.username+" Esta feliz!")
    .setImage(star.happy())
    .setTimestamp()

    message.channel.send({ embeds: [embed] })

},
}