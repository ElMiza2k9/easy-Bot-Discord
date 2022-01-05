const { MessageEmbed } = require("discord.js") 
module.exports = { 
    name: "wasted",
    alt: [],
    category: "Images",
    description: "Mata a un user de forma GTA",
    usage: "wasted @user",
    userPerms: [""],
    botPerms: [""],

go: async (client, message, args) => {

    const user = message.mentions.members.first();
        if (!user) {
            return message.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("Menciona un usuario")
            ]})
        }
        const avatar = user.user.displayAvatarURL({ size: 2048, format: "png" });

        await message.channel.send({ files: [{ attachment: `https://some-random-api.ml/canvas/wasted?avatar=${avatar}`, name: 'file.jpg' }] })

},
}