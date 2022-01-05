const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
const star = require("star-labs")
module.exports = { // Exportamos un modulo de node
    name: "fuckyou",
    alt: [],
    category: "Interaccion",
    description: "Saca el dedo maldito a un usuario",
    usage: "fuckyou <user>",

go: (client, message, args) => {

    const user = message.author
    const member = message.mentions.members.first()
    if(!member) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("**Menciona al usuario al cual le quieres sacar fuckyou😈**")
    ]})
    if(message.author.id === member.id) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("**¿Que intentas hacer?**")
    ]})
    if(client.id === member.id) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("**No gracias..**")
    ]})
    const user2 = message.mentions.users.first()
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(user.username+" Le saco fuckyou a " + user2.username)
    .setImage(star.fuckyou())
    .setTimestamp()

    message.channel.send({ embeds: [embed] })
},
}