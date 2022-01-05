const { MessageEmbed } = require("discord.js") 
module.exports = { 
    name: "createchannel",
    alt: [],
    category: "Configuracion",
    description: "Crea un canal",
    usage: "createchannel <nombre>",
    userPerms: ["MANAGE_CHANNELS"],
    botPerms: ["MANAGE_CHANNELS"],

go: (client, message, args) => {

    const nombre = args.join(" ")
    if(!nombre) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Debes poner un nombre valido!")
    ]})
    message.guild.channels.create(nombre).catch(() => {
        message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Usa caracteres validos!")
     ]})
     return;
    })
    message.channel.send({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("<:v_verde:924426156118249473> | Canal creado!")
    ]})

},
}