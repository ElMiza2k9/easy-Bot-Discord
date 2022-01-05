const { MessageEmbed } = require("discord.js") 
const gif = require("star-labs")
module.exports = { 
    name: "suicide",
    alt: [],
    category: "Interaccion",
    description: "Suicidate!",
    usage: "suicide",

go: (client, message, args) => {

    const user = message.author;
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**" + user.username + "** se suicido!")
    .setImage(gif.suicide())

    message.channel.send({ embeds: [
        embed
    ]})

},
}