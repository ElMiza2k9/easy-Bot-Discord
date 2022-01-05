const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const spanishmemes = require('spanish.memes');

module.exports = {

    data: new SlashCommandBuilder()

    .setName('image_meme')
    .setDescription('Genera un meme al azar'),

    async run(client, interaction){

        const embed = new MessageEmbed()

 .setTitle('Meme Generado')
 .setImage(spanishmemes.Meme())
 .setColor("RANDOM")

interaction.reply({ embeds: [embed] })


    }
}