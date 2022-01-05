const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
module.exports = {

    data: new SlashCommandBuilder()

    .setName('image_cat')
    .setDescription('Genera una imagen de un gato al azar'),

    async run(client, interaction){

        let gifs = ["https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg", "https://static6.depositphotos.com/1000291/651/i/600/depositphotos_6518860-stock-photo-british-shorthair-kitten-cat-isolated.jpg", "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg", "https://ichef.bbci.co.uk/news/640/cpsprodpb/8536/production/_103520143_gettyimages-908714708.jpg", "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59ad1ed15bafe8f8baace87f/gato-naranja-sentado_0.jpg", "https://ca-times.brightspotcdn.com/dims4/default/87be6da/2147483647/strip/true/crop/1970x1108+39+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001", "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg", "https://static.nationalgeographic.es/files/styles/image_3200/public/01-cat-names-nationalgeographic_1525054.jpg?w=1600&h=900", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvm-9R-Qc_qPSYOrnxpY3-FBRPajBA880zcw&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREd-hMT_Y2uu_UuDBYPVqnOSXZeOcurMbZFg&usqp=CAU", "https://media.traveler.es/photos/613769014c612f07ec398f0c/16:9/w_2560%2Cc_limit/152926.jpg", "https://www.redaccionmedica.com/images/destacados/coronavirus-gatos-perros-anticuerpos-reinfeccion-vacuna-covid--2116_620x368.jpg", "https://www.hola.com/imagenes/estar-bien/20201027177994/cosas-asustan-gatos-gt/0-882-234/gato-t.jpg", "https://dam.ngenespanol.com/wp-content/uploads/2019/02/gato-dia-internacional.png"]
    let giffinal = gifs[Math.floor(Math.random() * gifs.length)]

    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Imagen generada")
    .setImage(`${giffinal}`)

    interaction.reply({ embeds: [embed]})

    }
}