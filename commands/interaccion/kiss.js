const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
const star = require("star-labs")
module.exports = { // Exportamos un modulo de node
    name: "kiss",
    alt: [],
    category: "Interaccion",
    description: "Dale un beso a un usuario 7w7",
    usage: "kiss <@user>",

go: (client, message, args) => {

    const user = message.mentions.members.first()
    if(!user) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Debes mencionar al usuario que quieres besar")
    ]})
    if(client.id === user.id) return message.reply({ embeds: [
        new MesssageEmbed()
        .setColor("BLURPLE")
        .setDescription("Lo siento, no me gustan los besos")
    ]})
    if(message.author.id === user.id) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Nunca vi esto, alguien queriendose besar a si mismo...")
    ]})
    const embed = new MessageEmbed()
    
    .setColor("BLURPLE")
    .setDescription(`${message.author.username} beso a ${user.username}`)
    .setImage(star.kiss())

    message.channel.send({ embeds: [
        embed
    ]})

},
}