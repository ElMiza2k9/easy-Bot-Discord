const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('util_stats')
    .setDescription('Mira los stats del bot'),

    async run(client, interaction){

        const embed = new MessageEmbed()
  .setColor("BLURPLE")

  .setAuthor(`Información del bot`, client.user.displayAvatarURL({ size: 1024, format: 'png' }))
  .addField(`Developer`, `<@809584889296846880>`, true)
  .addField(`Version Node`, `${process.version}`, true)
  .addField(`Libreria`, Discord.version, true)
  .addField(`Lenguaje`, `JavaScript`, true)
  .addField(`Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField(`Servidores`, `${client.guilds.cache.size}`, true)
  .addField(`Usuarios`, `${client.users.cache.size}`, true)
  .addField(`Canales`, `${client.channels.cache.size}`, true)
 .addField(`Comandos`, `${client.commands.size}`, true)

 interaction.reply({ embeds: [embed] })

    }
}