const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
module.exports = { // Exportamos un modulo de node
    name: "kick",
    alt: [],
    category: "Moderacion",
    description: "Expulsa a un usuario la entrada al servidor",
    usage: "kick <user> [reason]",
    userPerms: ["KICK_MEMBERS"],
    botPerms: ["KICK_MEMBERS"],

go: async (client, message, args) => {

    const user = message.mentions.members.first()
    if(!user) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Tienes que mencionar al usuario que quieres kickear!")
    ]})
    if(user.roles.highest.comparePositionTo(message.member.roles.highest) > 0) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("El usuario que mencionaste tiene un rol mas alto o igual al tuyo!")
    ]});
    if(message.author.id === user.id) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No entiendo, ¿Te quieres kickear a ti mismo?")
    ]})
    if(client.id === user.id) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Quieres kickearme? :(")
    ]})
    let reason = args.slice(1).join(" ")
    if(!reason) reason = 'No especificado'

    const embedBan = new MessageEmbed()
    .setTitle("¡Un usuario fue baneado!")
    .setColor("BLURPLE")
    .setDescription(`El usuario ${user.user.tag} fue baneado!\n\n**Razon:**\n${reason}\n\n**ID:**\n${user.id}\n\n**Moderador:**\n${message.author}`)

    message.channel.send({ embeds: [embedBan]})
    
    await user.kick({ reason: reason })
},
}