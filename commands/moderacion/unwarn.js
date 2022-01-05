const { MessageEmbed } = require("discord.js") 
const schema = require("../../schemas/warns")
module.exports = { 
    name: "unwarn",
    alt: [],
    category: "Moderacion",
    description: "Sacale un warn a un usuario",
    usage: "",
    userPerms: ["KICK_MEMBERS"],
    botPerms: [],

go: (client, message, args) => {

    const mention = message.mentions.members.first()
    if(!mention) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setColor("Debes mencionar un usuario")
    ]})
    schema.findOne({ guildId: message.guild.id, userId: mention.user.id}, (err, results) => {
        if(err) throw err;
        if(results) {
            if(isNaN(args[1])) return message.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("Debes ingresar un numero!")
            ]});
            let number = parseInt(args[1]) - 1;
            results.warnings.splice(number, 1);
            results.save()
            message.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("Se le ha removido un warn al usuario!")
            ]})
        } else {
            message.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("El usuario que mencionaste no tiene warns!")
            ]})
        }
    })

},
}