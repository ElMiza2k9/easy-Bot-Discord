const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const schema = require("../schemas/warns")

module.exports = {

    data: new SlashCommandBuilder()

    .setName('moderacion_warn')
    .setDescription('Advierte a un usuario')
    .addUserOption(option => option .setName("usuario").setDescription("Menciona al usuario que quieres advertir").setRequired(true))
    .addStringOption(option => option .setName("razon").setDescription("Pon una razon para el warn")),

    async run(client, interaction){
        if(!interaction.member.permissions.has("KICK_MEMBERS")) return interaction.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("No tienes permisos!")
        ]})
        let user = interaction.options.getUser("usuario");
        if(user === interaction.user) return interaction.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("No te puedes sacar un warn a ti mismo")
    ]})
    const guildId = interaction.guild.id;
    const userId = user.id;
    let reason = interaction.options.getString("razon")
    if(!reason) reason = "No especificado"

    const warning = {
        author: interaction.user.tag,
        timestamp: new Date().getTime(),
        reason
    };
        try {
    await schema.findOneAndUpdate({
        guildId,
        userId
    }, {
        guildId,
        userId,
        $push: {
            warnings: warning
        }
    }, {
        upsert: true
    });
        } catch (e) {
            interaction.reply("Hubo un error.")
            console.log(e)
        }
        const embed = new MessageEmbed()
    .setDescription(`**${user.tag}** Fue warneado.\n\n**Razon:**\n\`${reason}\`\n\n**Moderador:**\n\`${interaction.user.tag}\``)
    .setColor("BLURPLE")
    const embedUser = new MessageEmbed()
    .setTitle("Warn!")
    .setColor("BLURPLE")
    .setDescription(`Haz sido warneado!, info: \n\`\`\`Razon: ${reason}\nStaff: ${interaction.user.tag}\nServidor: ${interaction.guild.name}\`\`\``)
    .setTimestamp()
    interaction.reply({ embeds: [embed] })
    user.send({ embeds: [embedUser]}).catch(err=>{});

    }
}