const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('util_ping')
    .setDescription('Mira el ping del bot en ms'),

    async run(client, interaction){

        interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setTitle("Pong!🏓")
            .setDescription("Mi ping es de **" + client.ws.ping + "**ms!")
        ], ephemeral: true})

    }
}