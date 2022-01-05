const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
module.exports = { // Exportamos un modulo de node
    name: "impostor",
    alt: [],
    category: "Diversion",
    description: "Mira si eres el impostor o si alguien mencionado lo es",
    usage: "impostor [user]",

go: (client, message, args) => {

    const mencionado = message.mentions.members.first() //Definimos mencionado

let random = [
"No era el impostor",
"Era el impostor"
] //Hacemos frases para ver si es o no


if(!mencionado)//Si el autor no menciono a nadie

 return message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.

　　　.　　　 　　.　　　　　。　　 。　. 　

.　　 。　　　　　 ඞ 。 . 　　 • 　　　　•

　　ﾟ　　 ${message.author.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.

　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。

　　ﾟ　　　.　　　. ,　　　　.　 .`) //Enviamos el mensaje

//Pero si menciona

message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.

　　　.　　　 　　.　　　　　。　　 。　. 　

.　　 。　　　　　 ඞ 。 . 　　 • 　　　　•

　　ﾟ　　 ${mencionado.user.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.

　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。

　　ﾟ　　　.　　　. ,　　　　.　 .`)

},
}