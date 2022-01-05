const { MessageEmbed } = require("discord.js") 
module.exports = { 
    name: "snipe",
    alt: [],
    category: "Moderacion",
    description: "Mira el ultimo mensaje eliminado",
    usage: "snipe [channel]",
    userPerms: [],
    botPerms: [],

go: (client, message, args) => {

    const channel = message.mentions.channels.first() || message.channel
    const msg = client.snipes.get(channel.id)
    if(!msg){
        message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("No he encontrado un mensaje eliminado en este canal!")
        ]})
    } else {
        const embed = new MessageEmbed()
        .setTitle("Snipe!")
        .setAuthor(`${msg.delete.tag}`, msg.delete.displayAvatarURL())
        .addField("Canal:", `#<${msg.channel.id}>`)
        .setDescription(msg.content)
        .setColor("BLURPLE")
        .setTimestamp()
        message.channel.send({ embeds: [embed]})
    }

},
}