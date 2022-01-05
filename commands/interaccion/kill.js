const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
const star = require("star-labs")
module.exports = { // Exportamos un modulo de node
    name: "kill",
    alt: [],
    category: "Interaccion",
    description: "Mata a un usuario!",
    usage: "kill <@user>",

go: (client, message, args) => {

    const user = message.mentions.members.first()
    if(!user) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Menciona al usuario que quieres matar!")
    ]})
    if(client.id === user.id) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No.. Lo siento pero no me dejare matar..")
    ]})
    if(message.author.id === user.id) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Acaso te quieres matar a ti mismo?")
    ]})
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**${message.author.username}** mato a ${user.user.username}`)
    .setImage(star.kill())
    .setTimestamp()

    message.channel.send({ embeds: [
        embed
    ]})
},
}