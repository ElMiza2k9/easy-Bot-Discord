const { MessageEmbed, Client } = require("discord.js") 
module.exports = { 
    name: "addrole",
    alt: [],
    category: "Administracion",
    description: "Agregale un rol a un usuario",
    usage: "addrole <@user> <@rol>",
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
        .setDescription("No te puedes agregar un rol a ti mismo!")
    ]})
    if(client.id === user.id) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No me puedes agregar un rol a mi ._.")
    ]})

    const rol = message.mentions.roles.first()
    if(!rol) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Debes mencionar un rol!")
    ]})
    if(user.roles.has(rol.id)) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("El usuario ya tiene ese rol!")
    ]})
    user.roles.add(rol).then(() => {
        message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Le he agregado el rol al usuario")
        ]})
    })

},
}