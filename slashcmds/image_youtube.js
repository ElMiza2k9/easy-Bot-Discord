const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed, MessageAttachment } = require('discord.js')
const canvacord = require("canvacord")

module.exports = {

    data: new SlashCommandBuilder()

    .setName('image_youtube')
    .setDescription('Envia un comentario a youtube')
    .addStringOption(option => option .setName("comentario").setDescription("Pon el comentario que quieres enviar").setRequired(true)),

    async run(client, interaction){

        const contenido = interaction.options.getString("comentario")    
        const user = interaction.user;
    
    let yt = await canvacord.Canvas.youtube({"avatar":user.displayAvatarURL({ format: "png"}),"username":user.username, "content":contenido})
    let comentario = new MessageAttachment(yt, "comentario.png")
    interaction.reply({ files: [comentario] })
    }
}