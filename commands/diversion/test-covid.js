const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
module.exports = { // Exportamos un modulo de node
    name: "test-covid",
    alt: [],
    category: "",
    description: "",
    usage: "",

go: (client, message, args) => {
   const user = message.mentions.members.first() || message.author;

   let opciones = [`${user.tag} ha dado negativo!`, `${user.tag} ha dado positivo!!, tiene covid!!!`]
   let opcionfinal = opciones[Math.floor(Math.random() * opciones.length)]

   const embed = new MessageEmbed()

   .setColor("RANDOM")
   .setTitle("Test de Covid-19")
   .setDescription(opcionfinal)

   message.channel.send({ embeds: [embed]})
  
},
}
