const { MessageEmbed } = require("discord.js") 
module.exports = { 
    name: "unlock",
    alt: [],
    category: "Moderacion",
    description: "Desbloquea un canal del servidor",
    usage: "unlock",

go: (client, message, args) => {

    if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No tienes permisos!")
    ]})
    if(!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No tengo permisos!")
    ]})
    let rol = message.guild.roles.cache.find(r => r.name === '@everyone')
    if(!rol) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No he encontrado el rol everyone!")
    ]})
    message.channel.permissionOverwrites.create(rol, { SEND_MESSAGES: true }).then(() => {
        message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Canal desbloqueado correctamente!")
        ]})
    }).catch(() => {
        message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Hubo un error!")
        ]})
        return;
    })

},
}