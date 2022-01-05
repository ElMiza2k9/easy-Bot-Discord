const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
const star = require("star-labs")
module.exports = { // Exportamos un modulo de node
    name: "slap",
    alt: [],
    category: "Interaccion",
    description: "Dale una bofetada a un usuario",
    usage: "slap <user>",

go: (client, message, args) => {

    const user = message.mentions.members.first()
    if(!user) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Menciona al usuario al cual le quieres dar una bofetada!")
    ]})
    if(message.author.id === user.id) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No te puedes abofetear a ti mismo!")
    ]})
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**${message.author.username}** abofeteo a **${user.username}**`)
    .setImage(star.slap())
    message.channel.send({ embeds: [embed]})

},
}