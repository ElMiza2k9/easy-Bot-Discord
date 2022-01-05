const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed, MessageAttachment } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('util_avatar')
    .setDescription('Mira el avatar de un usuario')
    .addUserOption(option => 
        option
        .setName("user")
        .setDescription("Menciona un usuario")
        ),

    async run(client, interaction){

        const user = interaction.options.getUser("user") || interaction.user
        const avatar = user.displayAvatarURL({ format: "png"})
        const attach = new MessageAttachment(`${avatar}`, null)
        interaction.reply({ files: [attach], ephemeral: true })
    }
}