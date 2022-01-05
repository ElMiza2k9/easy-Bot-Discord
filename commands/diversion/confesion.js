const { MessageEmbed } = require("discord.js") 
const Confesiones = require("../../schemas/confesiones")
module.exports = { 
    name: "confesion",
    alt: [],
    category: "Utilidad",
    description: "Haz una confesion al canal enviado",
    usage: "confesion <sugerencia>",

go: async (client, message, args) => {

    message.delete()

    const canalSugerencias = await Confesiones.findOne({ serverId: message.guild.id })
    if(!canalSugerencias) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("El servidor no tiene ningun canal de confesiones establecido")
    ]})
    const canalsug = client.channels.cache.get(canalSugerencias.canalId)
    const texto = args.join(" ")
    if(!texto) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Debes poner la confesion que quieres enviar")
    ]}).then(msg => {
        msg.delete({ timeout: 4000})
    });

    const embed = new MessageEmbed()
    .setTitle("Nueva confesion")
    .setDescription(`${texto}`)
    .setColor("BLURPLE")
    .setTimestamp()

    canalsug.send({ embeds: [embed]})

},
}