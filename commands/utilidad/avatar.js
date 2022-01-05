const { MessageEmbed } = require("discord.js") 
module.exports = { 
    name: "avatar",
    alt: [],
    category: "Utilidad",
    description: "Mira el avatar de un usuario o el tuyo",
    usage: "avatar [@user]",
    userPerms: [],
    botPerms: [],

go: (client, message, args) => {

    const user = message.mentions.members.first() || message.author;
    const avatar = user.displayAvatarURL({ format: "png"})
    const embed = new MessageEmbed()
    .setColor("BLURPLE")
    .setDescription("Avatar de **" + user.tag + "**")
    .setImage(`${avatar}`)
    .setTimestamp()
    
    message.channel.send({ embeds: [
        embed
    ]})

},
}