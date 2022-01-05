const { MessageEmbed } = require("discord.js") 
const Confesiones = require("../../schemas/confesiones")
module.exports = { 
    name: "setconfesiones",
    alt: [],
    category: "configuracion",
    description: "Elige un canal de confesiones",
    usage: "setconfesiones <#channel>",
    userPerms: ["ADMINISTRATOR"],

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
    let tumama = await Confesiones.findOne({ serverId: message.guild.id })

    let rodri = new Confesiones({
        serverId: message.guild.id,
        canalId: message.mentions.channels.first().id
    })
    tumama ? await Confesiones.updateOne({ serverId: message.guild.id}, { canalId: message.mentions.channels.first().id }) : await rodri.save().catch(err => {
        console.log(err)
    });

    message.channel.send({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("El canal fue establecido correctamente!")
    ]})
    
},
}