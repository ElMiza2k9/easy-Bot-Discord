const { MessageEmbed, MessageAttachment } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
const DIG = require("discord-image-generation");
module.exports = { // Exportamos un modulo de node
    name: "rip",
    alt: [],
    category: "Diversion",
    description: "Muestra a un usuario muerto",
    usage: "rip [user]",

go: async (client, message, args) => {

    const user = message.mentions.members.first() || message.author

    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
    // Make the image
    let img = await new DIG.Rip().getImage(avatar)
    // Add the image as an attachement
    let attach = new MessageAttachment(img, "delete.png");;
    message.channel.send({ files: [attach] })

},
}