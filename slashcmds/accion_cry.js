const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const star = require("star-labs")

module.exports = {

    data: new SlashCommandBuilder()

    .setName('reaccion_cry')
    .setDescription('Llora'),

    async run(client, interaction){

        const user = interaction.user
    const embed = new MessageEmbed()

    .setColor("RANDOM")
    .setDescription(user.username+" Esta llorando!😥")
    .setImage(star.cry())

    interaction.reply({ embeds: [embed] })

    }
}