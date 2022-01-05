const { MessageEmbed } = require("discord.js") 
const fetch = require("node-fetch")
module.exports = { 
    name: "tweet",
    alt: [],
    category: "",
    description: "Haz un tweet",
    usage: "",
    userPerms: [""],
    botPerms: [""],

go: (client, message, args) => {

    if(!args[0]) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Pon un texto")
    ]})
    if(!args.join(" ").length > 30) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Pon un texto mas corto!")
    ]})

    fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${args.join(" ")}`)
    .then((res) => res.json())
    .then((data) => {
        let embed = new MessageEmbed()
        .setTitle("Tweet!")
        .setImage(`${data.message}`)
        .setColor("BLURPLE")
        .setTimestamp()
        message.channel.send({ embeds: [embed] })
    }).catch(e => {
        message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Hubo une error")
        ]})
    })

},
}