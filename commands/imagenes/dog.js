const { MessageEmbed } = require("discord.js") // Exportamos la funcion messageEmbed de discord.js
module.exports = { // Exportamos un modulo de node
    name: "dog",
    alt: [],
    category: "Imagenes",
    description: "Genera una imagen de un perro",
    usage: "dog",

go: (client, message, args) => {

    let gifs = [
        "https://www.ecestaticos.com/imagestatic/clipping/797/767/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg?mtime=1622645511", "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg", "https://dam.ngenespanol.com/wp-content/uploads/2019/10/perros-personalidad-2.jpg", "https://s1.eestatic.com/2020/06/30/curiosidades/mascotas/mascotas_501711745_154816138_1706x960.jpg", "https://urgenciesveterinaries.com/wp-content/uploads/2020/01/hipotiroidismo-perros-01.jpg", "https://www.redaccionmedica.com/images/destacados/coronavirus-perros-no-necesitan-mascarillas-porque-no-se-contagian--5615_620x368.jpg", "https://static.dw.com/image/59713925_303.jpg", "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_noticia__small/public/media/2021/06/17/cachorros_entienden_humanos_0.jpg", "https://as01.epimg.net/diarioas/imagenes/2021/11/07/actualidad/1636307686_778477_1636307902_noticia_normal_recorte1.jpg", "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/RTKQTNJ3I5EX3AC55NTFBNOOYI.jpg", "https://images.ecestaticos.com/HGkYtf7o3mvAwpMri_Js51cDjPQ=/128x2:2145x1513/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F53a%2F72a%2F33e%2F53a72a33eea9f75e1130f52883a72bb2.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOuGiUAEXnMYJt8wPw14KO7SwuJpKnLELGg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPx7X4FV814-CYkujpj18fK5K_Efd1JX8kUw&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUCXjFuecXwMqqx_EIUnxmmdO2-C5n9show&usqp=CAU", "https://www.purina-latam.com/sites/g/files/auxxlc391/files/purina-brand-hasta-que-edad-son-cachorros-los-perros.jpg"
    ]
    let giffinal = gifs[Math.floor(Math.random() * gifs.length)]
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Imagen de perro")
    .setImage(`${giffinal}`)
    message.reply({
        embeds:
        [
            embed
        ]
    })

},
}