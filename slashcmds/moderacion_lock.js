const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('moderacion_lock')
    .setDescription('Bloquea un canal del servidor'),

    async run(client, interaction){

        if(!interaction.member.permissions.has("MANAGE_CHANNELS")) return interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("No tienes permisos!")
        ]})
        if(!interaction.guild.me.permissions.has("MANAGE_CHANNELS")) return interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("No tengo permisos!")
        ]})
        let rol = interaction.guild.roles.cache.find(r => r.name === '@everyone')
        if(!rol) return;

        interaction.channel.permissionOverwrites.create(rol, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false,
        }).then(() => {
            interaction.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("Canal bloqueado correctamente!")
            ]})
        })

    }
}