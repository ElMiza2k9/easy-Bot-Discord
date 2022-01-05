const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('config_antibots')
    .setDescription('Desactiva la entrada de bots al servidor')
    .addStringOption(option => 
        option
        .setName("opcion")
        .setDescription("Vas a activar o desactivar el sistema?")
        .setRequired(true)
        .addChoice("activar", "activar")
        .addChoice("desactivar", "desactivar")
        ),

    async run(client, interaction){

        if(!interaction.member.permissions.has("ADMINISTRATOR")){
            return interaction.reply({ embeds: [
                new MessageEmbed()
                .setDescription("No tienes permisos!")
                .setColor("BLURPLE")
            ]})
        }
        if(!interaction.guild.me.permissions.has("KICK_MEMBERS")) return;

        const datos = await moderacion.findOne({ guildId: interaction.guild.id })
        if(!datos){
            const schema = new moderacion({
                guildId: interaction.guild.id,
                antibots: "Desactivado"
            })
            await schema.save()
        }

        const accion = interaction.options.getString("opcion")
        if(accion === "activar"){
            if(datos.antibots === "Activado") return interaction.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("El sistema ya estaba activado!")
            ]})
            await moderacion.findOneAndUpdate({ guildId: interaction.guild.id }, { antibots: 'Activado' })
            return interaction.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("El sistema antibots fue activado!")
            ]})
        }
        if(accion === "desactivar"){
            if(datos.antibots === "Desactivado") return interaction.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("El sistema ya estaba desactivado!")
            ]})
            await moderacion.findOneAndUpdate({ guildId: interaction.guild.id }, { antibots: 'Desactivado' })
            return interaction.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("El sistema antibots fue desactivado!")
            ]})
        }

    }
}