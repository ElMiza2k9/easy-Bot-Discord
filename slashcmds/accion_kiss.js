const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const star = require("star-labs")
module.exports = {

    data: new SlashCommandBuilder()

    .setName('accion_kiss')
    .setDescription('Besa a un usuario')
    .addUserOption(option => 
        option
        .setName("user")
        .setDescription("Menciona un usuario")
        .setRequired(true)
        ),

    async run(client, interaction){

        const user = interaction.options.getUser("user")
    if(!user) return interaction.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Debes mencionar al usuario que quieres besar")
    ]})
    if(client.id === user.id) return interaction.reply({ embeds: [
        new MesssageEmbed()
        .setColor("BLURPLE")
        .setDescription("Lo siento, no me gustan los besos")
    ]})
    if(interaction.user.id === user.id) return interaction.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Nunca vi esto, alguien queriendose besar a si mismo...")
    ]})
    const embed = new MessageEmbed()
    
    .setColor("BLURPLE")
    .setDescription(`${interaction.user.username} beso a ${user.username}`)
    .setImage(star.kiss())

    interaction.reply({ embeds: [
        embed
    ]})

    }
}