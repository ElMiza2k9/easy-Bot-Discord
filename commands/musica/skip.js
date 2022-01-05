const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
module.exports = { // Exportamos un modulo de node
    name: "skip",
    alt: [],
    category: "Musica",
    description: "Salta una cancion de la playlist",
    usage: "skip",

go: (client, message, args) => {

    const queue = client.distube.getQueue(message.member.voice.channel)
    if(!queue) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No estas escuchando nada, que se supone que debo skipear?")
    ]})
    if(!message.member.voice.channel) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No estas escuchando nada, que se supone que debo skipear?")
    ]})
    if(message.guild.me.voice.channel && message.member.voice.channel !== message.guild.me.voice.channel) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No estas escuchando nada, que se supone que debo skipear?")
    ]})
    client.distube.skip(message.member.voice.channel)
    message.channel.send({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("La cancion fue skipeada!")
    ]})

},
}