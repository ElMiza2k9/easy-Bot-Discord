const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const star = require("star-labs")
module.exports = {

    data: new SlashCommandBuilder()

    .setName('reaccion_happy')
    .setDescription('Demuestra que estas feliz!'),

    async run(client, interaction){

        const user = interaction.user
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(user.username+" Esta feliz!")
    .setImage(star.happy())
    .setTimestamp()

    interaction.reply({ embeds: [embed] })

    }
}