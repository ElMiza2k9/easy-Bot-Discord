const { MessageEmbed } = require("discord.js") 
const schema = require("../../schemas/warns")
module.exports = { 
    name: "warn",
    alt: [],
    category: "Moderacion",
    description: "Advierte a un usuario",
    usage: "warn @user [reason]",
    userPerms: ["KICK_MEMBERS"],
    botPerms: [],

go: async (client, message, args) => {

    let user = message.mentions.members.first();
    if(user === message.author) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No te puedes sacar un warn a ti mismo")
    ]})
    if(!user) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Menciona un usuario")
    ]})

    const guildId = message.guild.id;
    const userId = user.user.id;
    let reason = args.slice(1).join(" ")
    if(!reason) reason = "No especificado"

    const warning = {
        author: message.member.user.tag,
        timestamp: new Date().getTime(),
        reason
    };
        try {
    await schema.findOneAndUpdate({
        guildId,
        userId
    }, {
        guildId,
        userId,
        $push: {
            warnings: warning
        }
    }, {
        upsert: true
    });
        } catch (e) {
            message.reply("Hubo un error.")
            console.log(e)
        }
    const embed = new MessageEmbed()
    .setDescription(`**${user.user.tag}** Fue warneado.\n\n**Razon:**\n\`${reason}\`\n\n**Moderador:**\n\`${message.author.tag}\``)
    .setColor("BLURPLE")
    const embedUser = new MessageEmbed()
    .setTitle("Warn!")
    .setColor("BLURPLE")
    .setDescription(`Haz sido warneado!, info: \n\`\`\`Razon: ${reason}\nStaff: ${message.author.tag}\nServidor: ${message.guild.id}\`\`\``)
    .setTimestamp()
    message.reply({ embeds: [embed] })
    user.send({ embeds: [embedUser]}).catch(err=>{});
},
}