const { MessageEmbed } = require("discord.js") 
const Prefix = require("../../schemas/setprefix")
module.exports = { 
    name: "setprefix",
    alt: [],
    category: "Configuracion",
    description: "Cambia el prefix del bot",
    usage: "setprefix <new prefix>",
    userPerms: ["ADMINISTRATOR"],
    botPerms: [],

go: async (client, message, args) => {

    const prefix = args.join(" ")
    if(!prefix){
        return message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("Menciona un prefix!")
        ]})
    }
    if(prefix.length > 4) {
        return message.reply({ embeds: [
            new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription("El prefix no puede contener mas de 4 caracteres!")
        ]})
    }

    const servidor = await Prefix.findOne({server_id: message.guild.id})

    const guardar = new Prefix({
        server_id: message.guild.id,
        prefix: prefix
    })

    servidor ? await guardar.updateOne({server_id: message.guild.id}, {prefix: prefix}) : await guardar.save().catch(e => {
        message.reply({ embeds: [new MessageEmbed().setColor("BLURPLE").setDescription("Ha ocurrido un error!")]})
        console.log(e)
    })
    message.channel.send({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("El prefix ha sido cambiado a **" + prefix + "**")
    ]})

},
}