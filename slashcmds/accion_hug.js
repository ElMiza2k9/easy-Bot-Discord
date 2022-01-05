const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const star = require("star-labs")
module.exports = {

    data: new SlashCommandBuilder()

    .setName('accion_hug')
    .setDescription('Abraza a un usuario')
    .addUserOption(option => 
        option
        .setName("user")
        .setDescription("Menciona un usuario")
        .setRequired(true)
        ),

    async run(client, interaction){

        const user = interaction.user;
    const member = interaction.options.getUser("user")
    if(!member) return interaction.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("**Menciona al usuario al cual quieres abrazar!**")
    ]})
    if(message.author.id === user.id) return interaction.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("**¿Un autoabrazo? raro...**")
    ]})
    if(client.id === user.id) return interaction.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("**Lo siento... No me gustan los abrazos**")
    ]})
    const user2 = message.mentions.users.first()
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(" **"+ user.username+"** Abrazo a **" + user2.username + "**")
    .setImage(star.hug())
    .setTimestamp()
    interaction.reply({ embeds: [embed]})

    }
}