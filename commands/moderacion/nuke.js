const Discord = require('discord.js');

module.exports = {
  name: "nuke", 
  alias: [], 
  description: "Borra un canal y vuelve a crearla",
  category: "moderacion",
  usage: "nuke",
  userPerms: ["MANAGE_CHANNELS"],
  botPerms: ["MANAGE_CHANNELS"],

go: async(client, message, args) => {
  message.channel.clone().then((ch) => {
    ch.setParent(message.channel.parent.id)
    ch.setPosition(message.channel.position)
    message.channel.delete()

    ch.send("https://c.tenor.com/XRPZ2wkhGx8AAAAC/radiation-atomic-bomb.gif%22")
  })

 }

}