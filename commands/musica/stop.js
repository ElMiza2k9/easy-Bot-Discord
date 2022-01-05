const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
module.exports = { // Exportamos un modulo de node
    name: "stop",
    alt: [],
    category: "Musica",
    description: "Ponle un stop a una cancion iniciada",
    usage: "stop",

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
    if(!queue.pause){
        message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("La cancion ya esta pausada!")
        ]})
    return;
    }
    try{
        client.distube.pause(message.member.voice.channel)
        message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("La cancion fue pausada correctamente!")
        ]})
    } catch (e) {
        message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Hubo un error, pronto sera arreglado")
        ]})
        console.log(e)
    }

},
}