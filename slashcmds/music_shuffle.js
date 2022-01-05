const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('musica_shuffle')
    .setDescription('Mezcla las canciones de tu lista asi se reproducen al azar!'),

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
        client.distube.shuffle(interaction.member.voice.channel)
        interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Shuffle activado!")
        ]})

    }
}