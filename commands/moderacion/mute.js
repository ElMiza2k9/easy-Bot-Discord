const { MessageEmbed } = require("discord.js") 
const db = require("megadb")
const muterol = new db.crearDB("Mutes")
module.exports = { 
    name: "mute",
    alt: [],
    category: "Moderacion",
    description: "Mutea a un usuario del servidor",
    usage: "mute <@user> [reason]",

go: async (client, message, args) => {

    if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No tienes permisos!")
    ]})
    let user = message.mentions.members.first()
    if(!user) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Debes mencionar un usuario!")
    ]})
    if(message.author.id === user.id) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No te puedes mutear a ti mismo!!")
    ]})
    if(user.id === '919640878123974748') return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No me puedes mutear a mi!!!")
    ]})
    var razon = args.slice(1).join(" ")
    if(!razon) razon = 'No especificado'
    if(!muterol.tiene(message.guild.id)) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("El servidor no tiene ningun rol muted establecido!")
    ]})
    let rol = await muterol.obtener(message.guild.id)
    if(user.roles.cache.has(rol)) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Este usuario ya esta muteado!")
    ]})
    user.roles.add(rol).then(() => {
        message.channel.send({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setTitle("Muted")
            .setDescription(`**${user.user.tag}** fue muteado\n\n**Razon:**\n\`${razon}\`\n\n**Moderador:**\n${message.author.tag}`)
        ]})
    })
},
}