const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
module.exports = { // Exportamos un modulo de node
    name: "avatar",
    alt: [],
    category: "Imagenes",
    description: "Mira el avatar tuyo o de otro usuario",
    usage: "avatar [user]",

go: (client, message, args) => {

    const user = message.mentions.members.first() || message.author
    const embed = new MessageEmbed()
    .setTitle("Avatar")
    .setDescription("avatar de **" + user.username + "**")
    .setImage(user.displayAvatarURL({ dynamic: false, format: 'png'}))

    message.channel.send({ embeds: [embed] })

},
}