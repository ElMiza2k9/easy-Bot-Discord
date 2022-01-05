const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

module.exports = {
  name: "stats", 
  alias: [], 
  description: "Mira informacion sobre el bot",

go: (client, message, args) => {

const embed = new Discord.MessageEmbed()
  .setColor(0x66ff66)

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

 message.channel.send({ embeds: [embed] })

 }

}