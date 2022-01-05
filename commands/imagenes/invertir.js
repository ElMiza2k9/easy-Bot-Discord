const { MessageEmbed, MessageAttachment } = require("discord.js") 
module.exports = { 
    name: "invertir",
    alt: [],
    category: "Diversion",
    description: "Invierte los colores del avatar de un usuario",
    usage: "invertir [@user]",
    userPerms: [],
    botPerms: [],

go: async (client, message, args) => {

    const user = message.mentions.members.first() || message.author;
    const avatar = user.displayAvatarURL({ format: "png"})
    const finallink = `https://luminabot.xyz/api/image/invert?image=${avatar}`
    const attach = new MessageAttachment(`${finallink}`, null)
    message.reply({ files: [attach] })
},
}