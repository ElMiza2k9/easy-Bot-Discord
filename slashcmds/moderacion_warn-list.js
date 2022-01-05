const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const schema = require("../schemas/warns")

module.exports = {

    data: new SlashCommandBuilder()

    .setName('moderacion_warn-list')
    .setDescription('Mira la lista de warns de un usuario')
    .addUserOption(option => option .setName("user").setDescription("Menciona un usuario")),

    async run(client, interaction){
        if(!interaction.member.permissions.has("KICK_MEMBERS")) return interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("No tienes permisos!")
        ]})
        const mention = interaction.options.getUser("user") || interaction.user
    const guildId = interaction.guild.id;
    const userId = mention.id;

        try {
            const results = await schema.findOne({
                guildId,
                userId
            });
            if(!results) return interaction.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("El usuario no tiene warns")
            ]})
            if(!results.warnings[0]) return interaction.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("El usuario no tiene warns")
            ]})
                interaction.reply({embeds: [new MessageEmbed()
                .setTitle("Warns de " + mention.username)
                .setDescription(
                    results.warnings.map((w, i) =>
                    `\n**#${i+1}**\n${w.reason}`
                    ).toString())
                .setColor("BLURPLE")
                ]});
        } catch(err) {
            console.log(err)
        }

    }
}