const { MessageEmbed, Client } = require("discord.js") 
module.exports = { 
    name: "dsugerencia",
    alt: [],
    category: "Extras",
    description: "Envia una sugerencia para que los desarrolladores la tomen en cuenta",
    usage: "sugerencia <sugerencia>",
    userPerms: [],
    botPerms: [],

go: (client, message, args) => {

    const sugerencia = args.join(" ")
    if(!sugerencia) return message.reply({
        embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Escribe la sugerencia que quieres enviar!")
        ]
    })
    client.channels.cache.get("922593363818074204").send({
        embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setTitle("Nueva sugerencia.")
            .setDescription(`${sugerencia}`)
        ]
    })
    message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("<:v_verde:924426156118249473> | La sugerencia fue enviada!")
    ]})

},
}