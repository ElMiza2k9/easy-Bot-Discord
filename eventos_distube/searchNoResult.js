const { MessageEmbed } = require("discord.js")
module.exports = (client, queue, song)=>{
    queue.textChannel.send({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription(`No he encontrado esa cancion!`)
    ]})
}