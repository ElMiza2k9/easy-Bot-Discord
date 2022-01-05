const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
const ytsr = require("ytsr")
module.exports = { // Exportamos un modulo de node
    name: "searchyt",
    alt: [],
    category: "Utilidad",
    description: "Haz una busqueda en youtube",
    usage: "searchyt <video>",

go: async (client, message, args) => {

    const query = args.join(" ")
    if(!query) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Dime lo que quieres buscar!")
    ]})
    const res = await ytsr(query).catch(e => {
        return message.reply({ embeds: [new MessageEmbed().setColor("BLURPLE").setDescription("No he encontrado ese video")]})
    })  
    const video = res.items.filter(i => i.type == 'video')[0]
    if(!video) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No he encontrado ese video")
    ]})
    const embed = new MessageEmbed()
    .setTitle(video.title)
    .setImage(video.bestThumbnail.url)
    .setColor("BLURPLE")
    .setDescription(`**[Url](${video.url})**`)
    .setAuthor(video.author.name)
    .addField("Vistas", video.views.toLocaleString(), true)
    .addField("Duracion", video.duration, true)

    return message.reply({ embeds: [embed] })

},
}