const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
const star = require("star-labs")
module.exports = { // Exportamos un modulo de node
    name: "cry",
    alt: [],
    category: "Interaccion",
    description: "Llora!",
    usage: "cry",

go: (client, message, args) => {

    const user = message.author;
    const embed = new MessageEmbed()

    .setColor("RANDOM")
    .setDescription(user.username+" Esta llorando!😥")
    .setImage(star.cry())

    message.channel.send({ embeds: [embed] })

},
}