const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const star = require("star-labs")
module.exports = {

    data: new SlashCommandBuilder()

    .setName('accion_kill')
    .setDescription('Mata a un usuario')
    .addUserOption(option => 
        option
        .setName("user")
        .setDescription("Menciona al usuario que querei matar")
        .setRequired(true)

        ),

    async run(client, interaction){

        const user = interaction.options.getUser("user")
    if(!user) return interaction.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Menciona al usuario que quieres matar!")
    ]})
    if(client.id === user.id) return interaction.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No.. Lo siento pero no me dejare matar..")
    ]})
    if(message.author.id === user.id) return interaction.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Acaso te quieres matar a ti mismo?")
    ]})
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**${interaction.user.username}** mato a ${user.user.username}`)
    .setImage(star.kill())
    .setTimestamp()

    interaction.reply({ embeds: [
        embed
    ]})

    }
}