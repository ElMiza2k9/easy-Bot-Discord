const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const Sugerencias = require("../schemas/confesiones")
module.exports = {

    data: new SlashCommandBuilder()

    .setName('fun_confesion')
    .setDescription('Envia una confesion al canal establecido')
    .addStringOption(option => 
        option
        .setName("confesion")
        .setDescription("Escribe tu confesion")
        .setRequired(true)
        ),

    async run(client, interaction){

        const canalSugerencias = await Sugerencias.findOne({ serverId: interaction.guild.id })
    if(!canalSugerencias) return interaction.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("El servidor no tiene ningun canal de confesiones establecido")
    ]})
    const canalsug = client.channels.cache.get(canalSugerencias.canalId)
    const texto = interaction.options.getString("confesion")

    const embed = new MessageEmbed()
    .setTitle("Nueva confesion")
    .addField("Confesion", texto)
    .setColor("RANDOM")
    .setTimestamp()

    canalsug.send({ embeds: [embed]}).then(async msg => {
        await msg.react("✅")
        await msg.react("❌")
    })

    }
}