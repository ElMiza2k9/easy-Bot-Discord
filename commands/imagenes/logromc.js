const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "logromc", 
  category: "Imagenes",
  usage: "logromc <logro>",
  description: "Gana un logro personalizado!",
go: (client, message, args) => {

    const texto = args.join(" ");

const texto_logro = texto.replace(/( )/g, '+');

 if (!texto) return message.reply({ embeds: [
     new MessageEmbed()
     .setColor("BLURPLE")
     .setDescription("Tienes que poner el logro que quieres ganar!")
 ]})

 if (texto.length > 23) return message.reply({ embeds: [
    new MessageEmbed()
    .setColor("BLURPLE")
    .setDescription("El texto tiene que tener menos de 23 letras!")
 ]})

 if (texto.length < 2) return message.reply({ embeds: [
     new MessageEmbed()
     .setColor("BLURPLE")
     .setDescription("El texto tiene que tener mas de 2 letras!")
 ]})
const imagen = Math.floor(Math.random() * 38) + 1;

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setImage(`https://minecraftskinstealer.com/achievement/${imagen}/%C2%A1Logro+obtenido%21/${texto_logro}`);

message.channel.send({ embeds: [embed] })
 },

} 