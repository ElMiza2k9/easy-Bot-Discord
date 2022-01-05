const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('fun_triggered')
    .setDescription('Mira el avatar de un usuario en un triggered')
    .addUserOption(option => 
        option 
        .setName("user")
        .setDescription("Menciona un usuario")
        ),

    async run(client, interaction){

        const user = interaction.options.getUser("user") || interaction.user;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
    // Make the image
    let img = await new DIG.Triggered().getImage(avatar)
    // Add the image as an attachement
    let attach = new MessageAttachment(img, "triggered.png");;
    interaction.reply({ files: [attach] })

    }
}