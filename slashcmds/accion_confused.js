const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const star = require("star-labs")
module.exports = {

    data: new SlashCommandBuilder()

    .setName('reaccion_confused')
    .setDescription('Confundete!'),

    async run(client, interaction){

        const user = interaction.user
    const embed = new MessageEmbed()

    .setColor("RANDOM")
    .setDescription(`${user.username} esta confundido!`)
    .setImage(star.confused())
    .setTimestamp()

    interaction.reply({ embeds: [embed] })

    }
}