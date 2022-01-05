const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('musica_play')
    .setDescription('Reproduce una cancion en un canal de voz')
    .addStringOption(option => option .setName("cancion").setDescription("Pon el nombre de la cancion").setRequired(true)),

    async run(client, interaction){

        const cancion = interaction.options.getString("cancion")
        if(!interaction.member.voice.channel) return interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("No estas en ningun canal de voz")
        ], ephmeral: true})
        if(interaction.guild.me.voice.channel && interaction.member.voice.channel !== interaction.guild.me.voice.channel) return interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Tienes que estar en el mismo canal que yo")
        ], ephmeral: true})
        interaction.client.distube.playVoiceChannel(
            interaction.member.voice.channel,
            cancion,
            {
                textChannel: interaction.channel,
                member: interaction.member
            }
        )
        interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Uniendome al chat de voz...")
        ]})
    }
}