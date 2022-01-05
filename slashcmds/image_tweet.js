const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const fetch = require("node-fetch")

module.exports = {

    data: new SlashCommandBuilder()

    .setName('image_tweet')
    .setDescription('Haz un tweet personalizado!')
    .addStringOption(option => 
        option
        .setName("tweet")
        .setDescription("Pon el texto del tweet!")
        .setRequired(true)
        ),

    async run(client, interaction){

        const texto = interaction.options.getString("tweet")
        if(!texto.length > 30) return interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Pon un texto mas corto!")
        ]})
        fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${interaction.user.username}&text=${texto}`)
        .then((res) => res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setTitle("Tweet!")
            .setImage(`${data.message}`)
            .setColor("BLURPLE")
            .setTimestamp()
            interaction.reply({ embeds: [embed] })
        }).catch(e => {
            interaction.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("Hubo un error")
            ]})
        })

    }
}