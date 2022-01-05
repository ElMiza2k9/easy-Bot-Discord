const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
const star = require("star-labs")
module.exports = { // Exportamos un modulo de node
    name: "sad",
    alt: [],
    category: "Interaccion",
    description: "Demuestra que estas sad!",
    usage: "sad",

go: (client, message, args) => {

    let gif = ["https://c.tenor.com/LEm_Bc072c8AAAAC/sad-anime.gif", "https://c.tenor.com/qOlLD4vk1hgAAAAC/sad-anime.gif", "https://c.tenor.com/XOtotUZHZjoAAAAC/sad-anime.gif", "https://c.tenor.com/iIzIv8RIvtIAAAAC/sad-anime.gif", "https://i.pinimg.com/originals/ee/1a/c5/ee1ac5f81bceeba101470052febe918e.gif", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKxFRBtern-Kps7ffnd3euiK-VfEbV7dGrRQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2OQNEy1cPXaZMYi_FGUwLnUtaE_u10bhmg&usqp=CAU"]
    let giffinal = gif[Math.floor(Math.random() * gif.length)]
    const user = message.author;
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**" + user.username + "** Esta sad!")
    .setImage(`${giffinal}`)

    message.channel.send({ embeds: [embed] })

},
}