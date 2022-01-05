const { MessageEmbed } = require("discord.js") 
const db = require("megadb")
const dbprefix = new db.crearDB("prefixs")
module.exports = { 
    name: "prefix",
    alt: [],
    category: "Utilidad",
    description: "Mira el prefix del bot",
    usage: "prefix",

go: async (client, message, args) => {
    let prefix = dbprefix.has(message.guild.id) ? await dbprefix.get(message.guild.id) : "*";
    message.channel.send({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Mi prefix en este servidor es **" + prefix + "**")
    ]})

},
}