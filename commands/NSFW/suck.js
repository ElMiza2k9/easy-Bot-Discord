const { MessageEmbed, Client } = require("discord.js") 
const nekoapi = require('cacao_nekoapi')
module.exports = { 
    name: "suck",
    alt: [],
    category: "NSFW",
    description: "No quiero decir nada.",
    usage: "No quiero decir nada.",
    userPerms: [],
    botPerms: [],

go: async (client, message, args) => {
    if(!message.channel.nsfw) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No puedes usar este comando en un canal que no es nsfw")
    ]})

    let img = await nekoapi.rolplay_nsfw.suck()
    let user = message.mentions.members.first()
    if(!user) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Menciona un usuario.")
    ]})
    if(message.author.id === user.id) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No puedes hacerte eso a ti mismo :/")
    ]})
    if(client.id === user.id) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No.")
    ]})
    const embed = new MessageEmbed()
    
    .setColor("RANDOM")
    .setDescription(`**${message.author.username}** le hace algo +18 a **${user.user.username}**`)
    .setImage(img.url)
    message.channel.send({ embeds: [embed]})
},
}