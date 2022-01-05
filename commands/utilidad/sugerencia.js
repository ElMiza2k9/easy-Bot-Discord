const { MessageEmbed } = require("discord.js") 
const Sugerencias = require("../../schemas/sugerencias")
module.exports = { 
    name: "sugerencia",
    alt: [],
    category: "Utilidad",
    description: "Envia una sugerencia al canal seleccionado",
    usage: "sugerencia <sugerencia>",
    userPerms: [],
    botPerms: [],

go: async(client, message, args) => {

    message.delete()

    const canalSugerencias = await Sugerencias.findOne({ serverId: message.guild.id })
    if(!canalSugerencias) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("El servidor no tiene ningun canal de sugerencias establecido")
    ]})
    const canalsug = client.channels.cache.get(canalSugerencias.canalId)
    const texto = args.join(" ")
    if(!texto) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Debes poner la sugerencia que quieres enviar")
    ]}).then(msg => {
        msg.delete({ timeout: 4000})
    });

    const embed = new MessageEmbed()
    .setTitle("Nueva sugerencia")
    .addField("Sugerencia:", texto)
    .setColor("BLURPLE")
    .setTimestamp()
    .setFooter("Sugerencia de: " + message.author.tag, message.author.avatarURL({dynamic: true}))

    canalsug.send({ embeds: [embed]}).then(async msg => {
        await msg.react("✅")
        await msg.react("❌")
    })

},
}