const { MessageEmbed } = require("discord.js") 
module.exports = { 
    name: "deletechannel",
    alt: [],
    category: "Configuracion",
    description: "Elimina un canal del servidor",
    usage: "deletechannel <#channel>",
    userPerms: ["MANAGE_CHANNELS"],
    botPerms: ["MANAGE_CHANNELS"],

go: (client, message, args) => {

    const canal = message.mentions.channels.first()
    if(!canal) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Debes mencionar el canal que quieres eliminar")
    ]})
    message.delete()
    canal.delete().then(() => {
        message.channel.send({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setTitle("Canal borrado!")
            .setDescription("<:v_verde:924426156118249473> | El canal fue eliminado correctamente!")
        ]})
    })
    message.delete()


},
}