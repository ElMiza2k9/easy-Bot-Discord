/*
const { MessageEmbed } = require("discord.js") 
const Levels = require("discord-xp")
Levels.setURL("mongodb+srv://nort:user-1@cluster0.t31jd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
module.exports = { 
    name: "leaderboard",
    alt: [],
    category: "Levels",
    description: "Mira la tabla de niveles",
    usage: "leaderbord",
    userPerms: [],
    botPerms: [],

go: async(client, message, args) => {

    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10)
    if(rawLeaderboard.length < 1) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("El servidor no tiene leaderbord!")
    ]})
    const leaderboard = await Levels.computeLeaderboard(
        client,
        rawLeaderboard,
        true
    );
    const lb = leaderboard.map(
        (e) =>
        `${e.position}. ${e.username}#${e.discriminator}\nXP: ${e.xp.toLocaleString()} | Level: ${e.level}`

    );

    const embed = new MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Leaderboard de **" + message.guild.name + "**")
    .setDescription(`\n\n${lb.join("\n\n")}`)
    .setTimestamp()

    message.reply({ embeds: [embed] })
},
}
*/