const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('config_deletechannel')
    .setDescription('Borra un canal del servidor')
    .addChannelOption(option => 
        option
        .setName("canal")
        .setDescription("Menciona un canal")
        .setRequired(true)
        ),

    async run(client, interaction){

        if(!interaction.member.permissions.has("MANAGE_CHANNELS")) return interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("No tienes permisos!")
        ], ephemeral: true})
        if(!interaction.guild.me.permissions.has("MANAGE_CHANNELS")) return interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("No tengo permisos!")
        ], ephemeral: true})
        
        const canal = interaction.options.getChannel("canal")
        canal.delete()
        .then(() => {
            interaction.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("El canal fue eliminado correctamente!")
            ]})
        })
        .catch(() => {
            interaction.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("Hubo un error.")
            ]})
        })
    }
}