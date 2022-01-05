const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('util_membercount')
    .setDescription('Mira la cantidad miembros que hay en el servidor'),

    async run(client, interaction){

        let embed = new MessageEmbed()
    .setAuthor(`Members`)
    .setDescription(`${interaction.guild.memberCount}`)
    .setColor("BLURPLE")
    
    interaction.reply({ embeds: [
        embed
    ]})

    }
}