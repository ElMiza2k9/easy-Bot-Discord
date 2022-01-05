const { MessageEmbed} = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
module.exports = { // Exportamos un modulo de node
    name: "play",
    alt: ["p"],
    category: "Musica",
    description: "Reproduce una cancion en un canal de voz",
    usage: "play <url or name song>",

go: (client, message, args) => {

    const cancion = args[0]
    if(!cancion) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Tienes que poner el nombre de una cancion o su url")
    ]})
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
    message.client.distube.playVoiceChannel(
        message.member.voice.channel,
        cancion,
        {
            textChannel: message.channel,
            member: message.member
        }
    )

},
}