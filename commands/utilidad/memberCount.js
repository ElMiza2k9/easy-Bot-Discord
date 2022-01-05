const { MessageEmbed } = require("discord.js") 
module.exports = { 
    name: "membercount",
    alt: [],
    category: "Utilidad",
    description: "Mira la cantidad de usuarios en el servidor",
    usage: "memberCount",
    userPerms: [],
    botPerms: [],

go: (client, message, args) => {

    let embed = new discord.MessageEmbed()
    .setAuthor(
    `Members`)
    .setDescription(`${message.guild.memberCount}`)
    .setColor("BLURPLE")
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel.send({ embeds: [
        embed
    ]})

},
}