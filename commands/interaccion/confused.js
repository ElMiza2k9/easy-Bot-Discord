const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
const star = require('star-labs');
module.exports = { // Exportamos un modulo de node
    name: "confused",
    alt: [],
    category: "Interaccion",
    description: "Demuestra que estas confundido!",
    usage: "confused",

go: (client, message, args) => {

    const user = message.author
    const embed = new MessageEmbed()

    .setColor("RANDOM")
    .setDescription(`${user.username} esta confundido!`)
    .setImage(star.confused())
    .setTimestamp()

    message.channel.send({ embeds: [embed] })
},
}