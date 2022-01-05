const { MessageEmbed } = require("discord.js") 
module.exports = { 
    name: "8ball",
    alt: [],
    category: "Diversion",
    description: "Hazle una pregunta al bot",
    usage: "8ball <8ball>",
    userPerms: [],
    botPerms: [],

go: (client, message, args) => {

    const pregunta = args.join(" ")
    if(!pregunta) return message.reply({ embeds: [
        new MessageEmbed()
        .setColor("BLURPLE")
        .setDescription("Hazme una pregunta!")
    ]})
    const respuestas = [
        "Si", "Mmmm, no", "Capaz XD", "Nunca", "Eeee no se", "obvio!!"
  ]
  const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)]
  message.reply({ embeds: [
      new MessageEmbed()
      .setColor("BLURPLE")
      .setTitle("8ball!")
      .setDescription("**Pregunta:**\n\`" + pregunta + "\`\n\n**Respuesta:**\n\`" + respuesta + "\`")
  ]})

},
}