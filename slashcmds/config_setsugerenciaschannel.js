const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const Sugerencias = require("../schemas/sugerencias")

module.exports = {

    data: new SlashCommandBuilder()

    .setName('config_setsugerencias')
    .setDescription('Elige un canal para las sugerencias')
    .addChannelOption(option => option .setName("canal").setDescription("Selecciona un canal").setRequired(true)),

    async run(client, interaction){

        const canal = interaction.options.getChannel("canal")
        if(canal.isVoice()) return interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("No puedes mencionar un canal de voz!")
        ]})
        let tumama = await Sugerencias.findOne({ serverId: interaction.guild.id })

        let rodri = new Sugerencias({
            serverId: interaction.guild.id,
            canal: canal.id
        })
        tumama ? await Sugerencias.updateOne({ serverId: interaction.guild.id }, { canalId: canal.id }) : await rodri.save().catch(e => {
            console.log(e)
        })

        interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("El canal fue establecido correctamente!")
        ]})

    }
}