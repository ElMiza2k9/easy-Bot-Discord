const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('util_uptime')
    .setDescription('Mira el tiempo online del bot'),

    async run(client, interaction){

        let days = Math.floor(client.uptime / 86400000 );
    let hours = Math.floor(client.uptime / 3600000 ) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    
    let embed = new MessageEmbed()
    .setColor("BLURPLE")
    .setDescription(`Mi tiempo Activo es de ${days}d ${hours}h ${minutes}m ${seconds}s`)
    
    interaction.reply({ embeds: [embed], ephemeral: true })


    }
}