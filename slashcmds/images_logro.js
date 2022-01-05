const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js');
module.exports = {

    data: new SlashCommandBuilder()

    .setName('image_logro')
    .setDescription('Consigue tu propio logro personalizado')
    .addStringOption(option => 
        option
        .setName("logro")
        .setDescription("Escribe tu logro")
        .setRequired(true)
        ),

    async run(client, interaction){

        const texto = interaction.options.getString("logro")

const texto_logro = texto.replace(/( )/g, '+');

 if (!texto) return interaction.reply({ embeds: [
     new MessageEmbed()
     .setColor("BLURPLE")
     .setDescription("Tienes que poner el logro que quieres ganar!")
 ]})

 if (texto.length > 23) return interaction.reply({ embeds: [
    new MessageEmbed()
    .setColor("BLURPLE")
    .setDescription("El texto tiene que tener menos de 23 letras!")
 ]})

 if (texto.length < 2) return interaction.reply({ embeds: [
     new MessageEmbed()
     .setColor("BLURPLE")
     .setDescription("El texto tiene que tener mas de 2 letras!")
 ]})
const imagen = Math.floor(Math.random() * 38) + 1;

const embed = new MessageEmbed()
.setColor("RANDOM")
.setImage(`https://minecraftskinstealer.com/achievement/${imagen}/%C2%A1Logro+obtenido%21/${texto_logro}`);

interaction.reply({ embeds: [embed] })

    }
}