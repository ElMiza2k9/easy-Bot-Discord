const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const star = require("star-labs")

module.exports = {

    data: new SlashCommandBuilder()

    .setName('reaccion_blush')
    .setDescription('Sonrojate!'),

    async run(client, interaction){

        const user = interaction.user;

    const embed = new MessageEmbed()

    .setColor("RANDOM")
    .setDescription("**"+user.username+"** Se sonrojo!😳")
    .setImage(star.blush())
    .setTimestamp()

    interaction.reply({ embeds: [embed] })

    }
}