const { MessageEmbed } = require("discord.js") 
const db = require("megadb")
const antibots = new db.crearDB("antibots")
module.exports = { 
    name: "antibots",
    alt: [],
    category: "Moderacion",
    description: "Impide las entradas de bots al servidor",
    usage: "antibots on/off",
    userPerms: ["ADMINISTRATOR"],
    botPerms: ["KICK_MEMBERS"],

go: (client, message, args) => {

    const opcion = args[0]
    if(!opcion) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Debes poner si vas a activar/desactivar el sistema (off, on)")
    ]})
    if(opcion === 'off'){
        if(antibots.tiene(message.guild.id, message.guild.name)) return message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("El sistema ya esta activado")
        ]})
        antibots.establecer(message.guild.id, message.guild.name).then(() => {
            message.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("<:tarjeta_verde:922234692521046066> | El sistema fue activado!")
            ]})
        })
    }
    if(opcion === 'on'){
        if(!antibots.tiene(message.guild.id, message.guild.name)) return message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("El sistema ya estaba desactivado!")
        ]})
        antibots.eliminar(message.guild.id, message.guild.name).then(() => {
            message.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("<:tarjeta_verde:922234692521046066> | El sistema fue desactivado!")
            ]})
        })
    }

},
}