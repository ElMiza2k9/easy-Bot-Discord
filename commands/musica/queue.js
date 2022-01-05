const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
module.exports = {
    name: "queue",
    alt: ["playlist"],
    category: "Musica",
    description: "Mira las canciones guardadas en la lista",
    usage: "queue",

go: (client, message, args) => {

    const queue = client.distube.getQueue(message.member.voice.channel)
    if(!queue) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No estas reproduciendo ninguna cancion!")
    ]})
    const embed = new MessageEmbed()
    .setTitle("queue de " + message.author.username)
    .setDescription('\n' + queue.songs.map((song, id) => `**${id + 1}**, **${song.name}** - \`${song.formattedDuration}\``).slice(0, 10).join("\n"))
    .setColor("BLURPLE")

    message.channel.send({ embeds: [embed] })
},
}