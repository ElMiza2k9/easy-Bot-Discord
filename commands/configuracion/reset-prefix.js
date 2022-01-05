const { MessageEmbed } = require("discord.js") 
const db = require("megadb")
const dbprefix = new db.crearDB("prefixs")
module.exports = { 
    name: "reset-prefix",
    alt: [],
    category: "Configuracion",
    description: "Resetea el prefix del bot",
    usage: "reset-prefix",
    userPerms: ["ADMINISTRATOR"],
    botPerms: [],

go: async (client, message, args) => {

    let server = message.guild.id
    let prefix = dbprefix.has(message.guild.id) ? await dbprefix.get(message.guild.id) : "*";
    dbprefix.eliminar(`${server}`, prefix)

    message.channel.send({ embeds: [
        new MessageEmbed()
        .setDescription("<:v_verde:924426156118249473> | El prefix fue restablecido a *****")
        .setColor("BLURPLE")
    ]})

},
}