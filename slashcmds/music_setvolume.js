const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('musica_setvolume')
    .setDescription('Cambia el volumen de la cancion')
    .addNumberOption(option => option .setName("volumen").setDescription("Pon el volumen que quieres establecer en la cancion").setRequired(true)),

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
        let porcentaje = interaction.options.getNumber("volumen")
        if(porcentaje < '1') return interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Tiene que ser mayor a 1!")
        ], ephmeral: true})
        if(porcentaje > 100) return interaction.reply({
            embeds: [new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Tiene que ser menor a 100!")], ephmeral: true
        })

        try {
            client.distube.setVolume(interaction.member.voice.channel, porcentaje)
        } catch(e){
            interaction.reply("Hubo un error")
            return;
            console.log(e)
        }
        interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Volumen ajustado!")
        ]})


    }
}