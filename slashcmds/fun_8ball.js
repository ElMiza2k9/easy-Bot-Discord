const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
module.exports = {

    data: new SlashCommandBuilder()

    .setName('fun_8ball')
    .setDescription('Hazle una pregunta al bot')
    .addStringOption(option => 
        option
        .setName("pregunta")
        .setDescription("Pon la pregunta que quieres hacerme")
        .setRequired(true)
        ),

    async run(client, interaction){

        const pregunta = interaction.options.getString("pregunta")
        const respuestas = [
            "Si", "No", "Capaz", "Obvio", "Ni con suerte", "Eeee no se", "Si, pero apenas", "Capaz, pero no"
        ]
        const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)]
        const embed = new MessageEmbed()
        .setColor("BLURPLE")
        .setTitle("8ball!")
        .addField("**Pregunta:**", `\`${pregunta}\``)
        .addField("**Respuesta:**", `\`${respuesta}\``)
        interaction.reply({ embeds: [embed] })
    }
}