const { MessageEmbed } = require("discord.js")
module.exports = (client, queue, song)=>{
    queue.textChannel.send({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription(`Añadida a la lista: ${song.name}`)
    ]})
}