const { MessageEmbed } = require("discord.js") 
const gif = require("star-labs")
module.exports = { 
    name: "sleep",
    alt: [],
    category: "Interaccion",
    description: "Quedate dormido!",
    usage: "sleep",

go: (client, message, args) => {

    const user = message.author;
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**" + user.username + "** se quedo dormido!")
    .setImage(gif.sleep())
    message.channel.send({ embeds: [embed] })

},
}