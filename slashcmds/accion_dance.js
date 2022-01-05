const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const star = require("star-labs")

module.exports = {

    data: new SlashCommandBuilder()

    .setName('accion_dance')
    .setDescription('Baila!'),

    async run(client, interaction){

        const user = interaction.user
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(user.username+" Esta bailando!")
    .setImage(star.dance())
    .setTimestamp()

    interaction.reply({ embeds: [embed] })

    }
}