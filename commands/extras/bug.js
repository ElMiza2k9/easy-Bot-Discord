const { MessageEmbed } = require("discord.js") 
module.exports = { 
    name: "bug",
    alt: [],
    category: "Extras",
    description: "Reporta un bug para que los desarrolladores lo arreglen",
    usage: "bug <bug>",
    userPerms: [],
    botPerms: [],

go: (client, message, args) => {

    const bug = args.join(" ")
    if(!bug) return message.reply({ embeds: [
        new MessageEmbed()
        .setDescription("Pon el bug que quieres reportar!")
        .setColor("BLURPLE")
    ]})
    client.channels.cache.get("922593350803136603").send({
        embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setTitle("Nuevo bug")
            .setDescription(`${bug}`)
        ]
    })
    message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("<:v_verde:924426156118249473> | El bug fue enviado")
    ]})

},
}