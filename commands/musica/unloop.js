const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
module.exports = { // Exportamos un modulo de node
    name: "unloop",
    alt: [],
    category: "Musica",
    description: "Quitale el loop a un comando",
    usage: "unloop",

go: (client, message, args) => {

    if(!message.member.voice.channel) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Tienes que estar en un canal de voz")
    ]})
    if(message.guild.me.voice.channel && message.member.voice.channel !== message.guild.me.voice.channel) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Tienes que estar en el mismo canal que yo")
    ]})
    const queue = client.distube.getQueue(message.member.voice.channel)
    if(!queue) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No estas reproduciendo ninguna cancion!")
    ]})

    client.distube.setRepeatMode(message.member.voice.channel, 0)
    message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Loop desactivado!")
    ]})
},
}