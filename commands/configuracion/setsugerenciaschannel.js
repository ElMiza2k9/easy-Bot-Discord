const { MessageEmbed } = require("discord.js") 
const { isVoiceChannelEmpty } = require("distube")
const Sugerencias = require("../../schemas/sugerencias")
module.exports = { 
    name: "setsugerencias",
    alt: [],
    category: "Configuracion",
    description: "Selecciona un canal para las sugerencias",
    usage: "setsugerencias <#channel>",
    userPerms: ["ADMINISTRATOR"],
    botPerms: [],

go: async (client, message, args) => {

    const canal = message.mentions.channels.first()
    if(!canal) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Menciona un canal!")
    ]})
    if(canal.isVoice()) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No puedes mencionar un canal de voz!")
    ]})
    let jot4Ele = message.guild.channels.resolve(canal.id)
    if(!jot4Ele) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Este canal no es del servidor")
    ]})
    let tumama = await Sugerencias.findOne({ serverId: message.guild.id })

    let rodri = new Sugerencias({
        serverId: message.guild.id,
        canalId: message.mentions.channels.first().id
    })
    tumama ? await Sugerencias.updateOne({ serverId: message.guild.id }, { canalId: message.mentions.channels.first().id }) : await rodri.save().catch(err => {
        console.log(err)
    })

    message.channel.send({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("El canal fue establecido!")
    ]})

},
}