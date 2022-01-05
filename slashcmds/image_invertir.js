const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed, MessageAttachment } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('image_invertir')
    .setDescription('Invierte los colores de el avatar de un usuario')
    .addUserOption(option => 
        option
        .setName("user")
        .setDescription("Menciona un usuario")
        ),

    async run(client, interaction){

        const user = interaction.options.getUser("user") || interaction.user
    const avatar = user.displayAvatarURL({ format: "png"})
    const finallink = `https://luminabot.xyz/api/image/invert?image=${avatar}`
    const embed = new MessageEmbed()
    .setTitle("Invertido!")
    .setImage(`${finallink}`)
    .setColor("BLURPLE")
    .setTimestamp()
    interaction.reply({ embeds: [embed], ephemeral: true})

    }
}