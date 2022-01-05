const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const schema = require("../schemas/warns")
module.exports = {

    data: new SlashCommandBuilder()

    .setName('moderacion_unwarn')
    .setDescription('Quitale un warn a un usuario')
    .addUserOption(option => option .setName("usuario").setDescription("Menciona a un usuario").setRequired(true))
    .addNumberOption(option => option .setName("warn").setDescription("Selecciona el warn que le quieres quitar al usuario").setRequired(true)),

    async run(client, interaction){

        if(!interaction.member.permissions.has("KICK_MEMBERS")) return interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("No tienes permisos!")
        ]})

        const mention = interaction.options.getUser("usuario")
        let warn = interaction.options.getNumber("warn")
        schema.findOne({ guildId: interaction.guild.id, userId: mention.id}, (err, results) => {
            if(err) throw err;
            if(results) {
                if(isNaN(warn)) return interaction.reply({ embeds: [
                    new MessageEmbed()
                    .setColor("BLURPLE")
                    .setDescription("Debes ingresar un numero!")
                ]});
                let number = parseInt(warn) - 1;
                results.warnings.splice(number, 1);
                results.save()
                interaction.reply({ embeds: [
                    new MessageEmbed()
                    .setColor("BLURPLE")
                    .setDescription("Se le ha removido un warn al usuario!")
                ]})
            } else {
                interaction.reply({ embeds: [
                    new MessageEmbed()
                    .setColor("BLURPLE")
                    .setDescription("El usuario que mencionaste no tiene warns!")
                ]})
            }
        })


    }
}