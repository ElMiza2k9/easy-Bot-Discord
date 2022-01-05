const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const DIG = require("discord-image-generation");
module.exports = {

    data: new SlashCommandBuilder()

    .setName('fun_delete')
    .setDescription('Elimina el avatar de un usuario!')
    .addUserOption(option => 
        option
        .setName("user")
        .setDescription("Menciona un usuario, no user = author")
        ),

    async run(client, interaction){

        const user = interaction.options.getUser("user") || interaction.user;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        let img = await new DIG.Delete().getImage(avatar)
        // Add the image as an attachement
        let attach = new MessageAttachment(img, "delete.png");;
        interaction.reply({ files: [attach] })

    }
}