const Discord = require('discord.js');
const spanishmemes = require('spanish.memes');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "meme", 
  category: "Imagenes",
  description: "Genera un meme al azar",
  usage: "meme",
  
go: (client, message, args) => {

 const embed = new Discord.MessageEmbed()

 .setTitle('Meme Generado')
 .setImage(spanishmemes.Meme())
 .setColor("RANDOM")

 message.channel.send({ embeds: [embed] })

 }

}  