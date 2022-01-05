const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('fun_jail')
    .setDescription('Encarcela a un usuario')
    .addUserOption(option => 
        option
        .setName("user")
        .setDescription("Menciona un usuario")
    ),

    async run(client, interaction){

      const user = interaction.options.getUser("user") || interaction.user;
      let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
    // Make the image
    let img = await new DIG.Jail().getImage(avatar)
    // Add the image as an attachement
    let attach = new MessageAttachment(img, "jail.png");;
    interaction.reply({ files: [attach] })  

    }
}