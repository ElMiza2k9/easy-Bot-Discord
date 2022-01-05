const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const Sugerencias = require("../schemas/sugerencias")
module.exports = {

    data: new SlashCommandBuilder()

    .setName('util_sugerencia')
    .setDescription('Envia una sugerencia al canal establecido')
    .addStringOption(option => 
        option
        .setName("sugerencia")
        .setDescription("Envia la sugerencia")
        .setRequired(true)
        ),

    async run(client, interaction){

        const canalSugerencias = await Sugerencias.findOne({ serverId: interaction.guild.id })
    if(!canalSugerencias) return interaction.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("El servidor no tiene ningun canal de sugerencias establecido")
    ]})
    const canalsug = client.channels.cache.get(canalSugerencias.canalId)
    const texto = interaction.options.getString("sugerencia")

    const embed = new MessageEmbed()
    .setTitle("Nueva sugerencia")
    .addField("Sugerencia:", texto)
    .setColor("BLURPLE")
    .setTimestamp()
    .setFooter("Sugerencia de: " + interaction.user.tag, interaction.user.avatarURL({dynamic: true}))

    canalsug.send({ embeds: [embed]}).then(async msg => {
        await msg.react("✅")
        await msg.react("❌")
    })

    }
}