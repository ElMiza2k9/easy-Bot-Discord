const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed, MessageAttachment } = require('discord.js')
module.exports = {

    data: new SlashCommandBuilder()

    .setName('fun_wasted')
    .setDescription('Muesrta la muerte de un usuario como en gta')
    .addUserOption(option => 
        option
        .setName("user")
        .setDescription("Menciona un usuario")
        .setRequired(true)
        ),

    async run(client, interaction){

        const user = interaction.options.getUser("user") || interaction.user;
        const avatar = user.displayAvatarURL({ size: 2048, format: "png" });

        await interaction.reply({ files: [{ attachment: `https://some-random-api.ml/canvas/wasted?avatar=${avatar}`, name: 'file.jpg' }] })


    }
}