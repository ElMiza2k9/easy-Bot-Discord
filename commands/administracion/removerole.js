const { MessageEmbed, Client } = require("discord.js") 
module.exports = { 
    name: "removerole",
    alt: [],
    category: "Administracion",
    description: "Quitale un rol a un usuario",
    usage: "removerole <@user> <@rol>",
    userPerms: ["MANAGE_ROLES"],
    botPerms: ["MANAGE_ROLES"],

go: (client, message, args) => {

    const user = message.mentions.members.first()
    if(!user) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Debes mencionar un usuario!")
    ]})
    if(message.author.id === user.id) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No te puedes sacar un rol a ti mismo!")
    ]})
    if(client.id === user.id) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No me puedes sacar un rol a mi ._.")
    ]})

    const rol = message.mentions.roles.first()
    if(!rol) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Debes mencionar un rol!")
    ]})
    if(!user.roles.has(rol.id)) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("El usuario no tiene ese rol!")
    ]})
    user.roles.remove(rol).then(() => {
        message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Le he sacado el rol al usuario")
        ]})
    })

},
}