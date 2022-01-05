const client = require("../index");
const db = require("megadb");
const { MessageEmbed, Collection } = require("discord.js");
const CustomPrefix = require("../schemas/setprefix");

client.on("messageCreate", async (message) => {
    let prefix_custom = await CustomPrefix.findOne({server_id: message.guild.id})
    let prefix;
    if(prefix_custom) {
        prefix = prefix_custom.prefix;
    } else {
        prefix = "*"
    }
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.alt?.includes(cmd.toLowerCase()));

    if (!command){
            if(message.content === prefix) return;
            message.reply({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setTitle("Opsss..")
                .setDescription("El comando **" + cmd + "** no esta en mi lista de comandos!")
            ]})
            return
        }
    if(!message.member.permissions.has(command.userPerms || [])) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription(`Necesitas el permiso \`${command.userPerms || []}\` para utilizar el comando!`)
    ]})
    if(!message.guild.me.permissions.has(command.botPerms || [])) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription(`Necesito el permiso \`${command.botPerms || []}\` para utilizar el comando!`)
    ]})
    await command.go(client, message, args);
});