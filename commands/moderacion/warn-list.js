const { MessageEmbed } = require("discord.js") 
const schema = require("../../schemas/warns")
module.exports = { 
    name: "warn-list",
    alt: [],
    category: "Moderacion",
    description: "Mira los warns de un usuario",
    usage: "",
    userPerms: ["KICK_MEMBERS"],
    botPerms: [],

go: async (client, message, args) => {

    const mention = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const guildId = message.guild.id;
    const userId = mention.user.id;

        try {
            const results = await schema.findOne({
                guildId,
                userId
            });
            if(!results) return message.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("El usuario no tiene warns")
            ]})
            if(!results.warnings[0]) return message.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("El usuario no tiene warns")
            ]})
                message.reply({embeds: [new MessageEmbed()
                .setTitle("Warns de " + mention.user.username)
                .setDescription(
                    results.warnings.map((w, i) =>
                    `\n**#${i+1}**\n${w.reason}`
                    ).toString())
                .setColor("BLURPLE")
                ]});
        } catch(err) {
            console.log(err)
        }
},
}