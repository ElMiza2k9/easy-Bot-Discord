const { MessageEmbed } = require("discord.js") 
const db = require("megadb")
const muterol = new db.crearDB("Mutes")
module.exports = { 
    name: "setmute",
    alt: [],
    category: "Configuracion",
    description: "Elige un rol para el muted",
    usage: "setmute <@rol>",
    userPerms: ["ADMINISTRATOR"],

go: (client, message, args) => {
    let rol = message.mentions.roles.first()
    if(!rol) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Debes mencionar el rol que quieres usar como muted")
    ]})

    muterol.establecer(message.guild.id, rol.id).then(() => {
        message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("<:v_verde:924426156118249473> | El rol **" + rol.name + "** ha sido establecido para el rol muted")
        ]})
    })

},
}