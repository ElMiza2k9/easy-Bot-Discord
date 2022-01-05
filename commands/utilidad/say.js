const { MessageEmbed } = require("discord.js") 
module.exports = { 
    name: "say",
    alt: [],
    category: "Utilidad",
    description: "Envia un mensaje embed o normal con el bot",
    usage: "say [message / embed] <text>",
    userPerms: ["MANAGE_MESSAGES"],
    botPerms: ["SEND_MESSAGES"],

go: (client, message, args) => {

    const opcion = args[0]
    if(!opcion) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Debes poner una opcion! (say [message / embed] <text> )")
    ]})
    if(!['message', 'embed'].includes(opcion)) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Debes poner una opcion! (say [message / embed] <text> )")
    ]})
    const texto = args.slice(1).join(" ")
    if(opcion === 'message'){
        if(!texto) return message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Pon el texto que quieres que yo diga")
        ]})
        if(texto.includes("@")) return message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("No puedes hacer menciones!")
        ]})
        message.channel.send({ content: texto })
    }
    if(opcion === 'embed') {
        let color = args[1]
        if(!color) return message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Debes poner un color! ( say embed <color> <texto> )")
        ]})
        let text = args.slice(2).join(" ")
        if(!text) return message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Pon el texto que quieres que yo diga")
        ]})
        if(text.includes("@")) return message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("No puedes hacer menciones!")
        ]})
        message.channel.send({ embeds: [
            new MessageEmbed()
            .setColor(`${color}`)
            .setDescription(`${texto}`)
        ]})
    } 

},
}