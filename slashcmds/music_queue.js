const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('musica_queue')
    .setDescription('Mira la lista de tus canciones'),

    async run(client, interaction){

        const queue = client.distube.getQueue(interaction.member.voice.channel)
    if(!queue) return interaction.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No estas reproduciendo ninguna cancion!")
    ]})
    const embed = new MessageEmbed()
    .setTitle("queue de " + interaction.user.username)
    .setDescription('\n' + queue.songs.map((song, id) => `**${id + 1}**, **${song.name}** - \`${song.formattedDuration}\``).slice(0, 10).join("\n"))
    .setColor("BLURPLE")

    interaction.reply({ embeds: [embed] })

    }
}