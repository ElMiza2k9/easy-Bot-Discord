const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js") 
const db = require("megadb")
const dbprefix = new db.crearDB("prefixs")
module.exports = { 
    name: "help",
    alt: [],
    category: "Utilidad",
    description: "Mira los comandos del bot",
    usage: "help [command]",
    userPerms: [],
    botPerms: [],

go: async (client, message, args) => {
    let prefix = dbprefix.has(message.guild.id) ? await dbprefix.get(message.guild.id) : "*";

    const directories = [
        ...new Set(client.commands.map((cmd) => cmd.directory)),
    ]
    const formatString = (str) =>
        `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

    const categories = directories.map((dir) => {
        const getCommands = client.commands.filter(
            (cmd) => cmd.directory === dir
            ).map(cmd => {
                return {
                    name: cmd.name || "undefined",
                    description: cmd.description ||
                     "undefined",
                }
            });

            return {
                directory: formatString(dir),
                commands: getCommands,
            }
    });

    const embed = new MessageEmbed().setDescription(`Menu principal:\n\n**<:tarjeta_verde:922234692521046066> | Para ver mis comandos y categorias usa el menu!**\n\n**<:Bot:910731435843923979> | Informacion sobre el bot:**\n<:etiqueta:922240326863831050> | Mi prefijo determinado es: \`*\`\n <:etiqueta:922240326863831050>  | Mi prefijo en este servidor es: \`${prefix}\`\n<:VerifiedBotDeveloper:910921401840586753> | Lenguaje: \`JavaScript\`\n <:Verified:910731167249088582> | Developer: \`!   ElPeke027#3581\``).setTitle("Panel de ayuda").setColor("BLURPLE")

    const components = (state) => [
        new MessageActionRow().addComponents(
            new MessageSelectMenu()
            .setCustomId("help-menu")
            .setPlaceholder('Selecciona una categoria')
            .setDisabled(state)
            .addOptions(
                categories.map((cmd) => {
                    return {
                        label: cmd.directory,
                        value: cmd.directory.toLocaleLowerCase(),
                        description: `Comandos de ${cmd.directory}`
                    }
                })
            )
        )
            ]

    const initialMessage = await message.channel.send({
        embeds: [embed],
        components: components(false),
    })

    const filter = (interaction) => interaction.user.id === message.author.id;
    const collector = message.channel.createMessageComponentCollector({ filter, componentsType: 'SELECT_MENU', })

    collector.on('collect', (interaction) => {
        const [ directory ] = interaction.values;
        const category = categories.find(x => x.directory.toLocaleLowerCase() === directory
        );
        const categoryEmbed = new MessageEmbed()
        .setTitle(`Comandos de ${directory}`)
        .setDescription("Lista de comandos:")
        .setColor("BLURPLE")
        .addFields(
            category.commands.map((cmd) => {
                return {
                    name: `\`\`\`${cmd.name}\`\`\``,
                    value: cmd.description,
                    inline: true,
                }
            })
        )
        interaction.update({ embeds: [categoryEmbed] })
    });

    collector.on('end', () => {
        initialMessage.edit({ components: components(true)})
    })

},
}