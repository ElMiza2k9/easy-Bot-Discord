const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('musica_skip')
    .setDescription('Salta una cancion de la lista'),

    async run(client, interaction){

        if(!interaction.member.voice.channel) return interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Tienes que estar en un canal de voz")
        ], ephemeral: true})
        if(interaction.guild.me.voice.channel && interaction.member.voice.channel !== interaction.guild.me.voice.channel) return interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Tienes que estar en el mismo canal que yo")
        ], ephmeral: true})
        const queue = client.distube.getQueue(interaction.member.voice.channel)
        if(!queue) return interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("No estas reproduciendo ninguna cancion!")
        ], ephmeral: true})
    client.distube.skip(interaction.member.voice.channel).catch(err => {
        interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Ya no hay canciones en la lista!")
        ]})
    })
    interaction.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("La cancion fue skipeada!")
    ]})


    }
}