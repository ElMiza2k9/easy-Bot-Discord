const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "userinfo", 
  category: "Utilidad",
  usage: "userinfo [user]",
  description: "Mira la informacion de un usuario",
  userPerms: ["ADMINISTRATOR"],
  
 go: async (client, message, args) => {
      
let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "🟢 En linea";
                break;
            case "dnd":
                status = "⛔ No molestar";
                break;
            case "idle":
                status = "🌙 Ausente";
                break;
            case "offline":
                status = "⚪ Desconectado";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`📖 Informacion del usuario ${user.user.username}`)
            .setColor(`BLURPLE`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "📋 Apodo: ",
                    value: message.member.nickname ? message.member.nickname : "No tiene apodo",
                    inline: true
                },
                {
                    name: "#️⃣ Tag: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 ID: ",
                    value: user.user.id,
                },
                {
                    name: "🔘 Reciente Actividad: ",
                    value: status,
                    inline: true
                },
                {
                    name: "Estado: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].state : "Sin estado",
                    inline: true
                },
                {
                    name: '📷 Avatar link: ',
                    value: `[Clic Aqui](${user.user.displayAvatarURL()})`
                },
                {
                    name: '📌 Dato de creacion: ',
                    value: user.user.createdAt.toLocaleDateString("es-pe"),
                    inline: true
                },
                {
                    name: '📟 Fecha de entrada al Servidor: ',
                    value: user.joinedAt.toLocaleDateString("es-pe"),
                    inline: true
                },
                {
                    name: '✔ Roles del usuario: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )


        await message.channel.send({ embeds: [embed]})
 }

}