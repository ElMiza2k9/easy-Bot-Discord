const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "uptime", 
  alias: [],
  description: "Mira el tiempo activo del bot", 

 go: (client, message, args) => {

 let days = Math.floor(client.uptime / 86400000 );
    let hours = Math.floor(client.uptime / 3600000 ) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    
    let embed = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setDescription(`Mi tiempo Activo es de ${days}d ${hours}h ${minutes}m ${seconds}s`)
    
    message.channel.send({ embeds: [embed] })

 }

}  