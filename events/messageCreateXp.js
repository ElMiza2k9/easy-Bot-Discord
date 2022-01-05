/*const client = require("../index") 
require("dotenv").config()
const Levels = require("discord-xp")
const { MessageEmbed } = require("discord.js")
Levels.setURL("mongodb+srv://nort:user-1@cluster0.t31jd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
client.on("messageCreate", async (message) => {
    if(message.author.bot) return;

    const random = Math.floor(Math.random() * 15) + 15;
    const hasLevelledup = await Levels.appendXp(
        message.author.id,
        message.guild.id,
        random
    );

    if(hasLevelledup) {
        const user = await Levels.fetch(message.author.id, message.guild.id);

        message.channel.send({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription(`GG! ${message.author.tag}, has llegado a nivel ${user.level}!`)
        ]})
    }
});
*/