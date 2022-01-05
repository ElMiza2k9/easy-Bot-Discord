const { MessageEmbed, MessageAttachment } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
const DIG = require("discord-image-generation");
module.exports = { // Exportamos un modulo de node
    name: "discord",
    alt: [],
    category: "Diversion",
    description: "Muestra el avatar de un usuario con discord de fondo",
    usage: "discord [user]",

go: async (client, message, args) => {

    const user = message.mentions.members.first() || message.author

    let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
    // Make the image
    let img = await new DIG.DiscordBlue().getImage(avatar)
    // Add the image as an attachement
    let attach = new MessageAttachment(img, "delete.png");;
    message.channel.send({ files: [attach] })

},
}