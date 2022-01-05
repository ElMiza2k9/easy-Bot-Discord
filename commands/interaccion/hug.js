const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
const star = require("star-labs")
module.exports = { // Exportamos un modulo de node
    name: "hug",
    alt: [],
    category: "Interaccion",
    description: "Abraza a un usuario!",
    usage: "hug <user>",

go: (client, message, args) => {

    const user = message.author;
    const member = message.mentions.members.first()
    if(!member) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("**Menciona al usuario al cual quieres abrazar!**")
    ]})
    if(message.author.id === user.id) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("**¿Un autoabrazo? raro...**")
    ]})
    if(client.id === user.id) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("**Lo siento... No me gustan los abrazos**")
    ]})
    const user2 = message.mentions.users.first()
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(" **"+ user.username+"** Abrazo a **" + user2.username + "**")
    .setImage(star.hug())
    .setTimestamp()
    message.channel.send({ embeds: [embed]})
},
}