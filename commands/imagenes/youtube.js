const { MessageEmbed, MessageAttachment } = require("discord.js") 
const canvacord = require("canvacord")
module.exports = { 
    name: "youtube",
    alt: [],
    category: "Imagenes",
    description: "Envia un comentario en youtube",
    usage: "youtube <comentario>",
    userPerms: [],
    botPerms: [],

go: async(client, message, args) => {

    const user = message.author;
    
    const contenido = args.join(" ")
    if(!contenido) {
        return message.reply({
            embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("Pon el comentario que quieres enviar")
            ]
        })
    }
    let yt = await canvacord.Canvas.youtube({"avatar":user.displayAvatarURL({ format: "png"}),"username":user.username, "content":contenido})
    let comentario = new MessageAttachment(yt, "comentario.png")
    message.channel.send({ files: [comentario] })

},
}