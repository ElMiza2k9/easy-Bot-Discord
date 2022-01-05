const { MessageEmbed } = require("discord.js") 
module.exports = { 
    name: "lock",
    alt: [],
    category: "Moderacion",
    description: "Bloquea el canal en el servidor",
    usage: "lock",

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
    message.channel.permissionOverwrites.create(rol, { SEND_MESSAGES: false }).then(() => {
        message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Canal bloqueado correctamente!")
        ]})
    })

},
}