const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
module.exports = { // Exportamos un modulo de node
    name: "clear",
    alt: [],
    category: "Moderacion",
    description: "Elimina una cantidad de mensajes",
    usage: "clear <cantidad>",
    userPerms: ["MANAGE_MESSAGES"],
    botPerms: ["MANAGE_MESSAGES"],

go: (client, message, args) => {

    const cantidad = args[0]
    if(isNaN(cantidad)) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Tienes que poner una cantidad valida!")
    ]})
    if(!cantidad) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Debes poner una cantidad de 2 a 100")
    ]})
    if(cantidad === '0') return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Debes poner una cantidad de 2 a 100")
    ]})
    if(cantidad === '1') return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Debes poner una cantidad de 2 a 100")
    ]})

    message.channel.bulkDelete(cantidad).then(() => {
        message.channel.send({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription(`**${cantidad}/${cantidad}** mensajes eliminados!`)
        ]})
    })

},
}