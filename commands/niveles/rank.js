/*const { MessageEmbed, MessageAttachment } = require("discord.js") 
const Levels = require("discord-xp")
Levels.setURL("mongodb+srv://nort:user-1@cluster0.t31jd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
const canvacord = require("canvacord")
module.exports = { 
    name: "rank",
    alt: [],
    category: "Levels",
    description: "Mira tu tarjeta de nivel",
    usage: "rank [@user]",
    userPerms: [],
    botPerms: [],

go: async(client, message, args) => {

    const target = message.mentions.members.first() || message.author;

    const img = target.displayAvatarURL({ format: 'png', dynamic: true })

    const user = await Levels.fetch(target.id, message.guild.id, true)

    const xpRequired = Levels.xpFor(user.level+1)
    
    const rank = new canvacord.Rank()
    .setAvatar(img)
    .setCurrentXP(user.xp)
    .setRequiredXP(xpRequired)
    .setLevel(user.level)
    .setRank(user.position)
    .setProgressBar("#00aae4", "COLOR")
    .setOverlay("#000000")
    .setBackground("IMAGE", "https://fondosmil.com/fondo/20921.jpg")
    .setUsername(target.username)
    .setDiscriminator(target.discriminator);
    rank.build().then(data =>{
        const attachment = new MessageAttachment(data, "rank.png")
        message.reply({ files: [attachment]})
    })
    

},
}
*/