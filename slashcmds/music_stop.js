const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('musica_stop')
    .setDescription('Ponle un stop a la lista de canciones!'),

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
        if(!queue.pause){
            interaction.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("La cancion ya esta pausada!")
            ]})
        return;
        }
        try{
            client.distube.pause(interaction.member.voice.channel)
            interaction.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("La cancion fue pausada correctamente!")
            ]})
        } catch (e) {
            interaction.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("Hubo un error, pronto sera arreglado")
            ]})
            console.log(e)
        }

    }
}