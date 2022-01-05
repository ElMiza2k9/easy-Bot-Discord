const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed, MessageAttachment } = require('discord.js')
module.exports = {

    data: new SlashCommandBuilder()

    .setName('fun_clyde')
    .setDescription('Haz que clyde diga algo!')
    .addStringOption(option => 
        option
        .setName("texto")
        .setDescription("Pon un texto")
        .setRequired(true)
        ),

    async run(client, interaction){

        const text = interaction.options.getString("texto")

		const url = `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`;

		let response;
		try {
			response = await fetch(url).then(res => res.json());
		}
		catch (e) {
			return message.channel.send('Hubo un error!');
		}
		const attachment = new MessageAttachment(response.message, 'clyde.png');
		return message.channel.send({files: [attachment]});

    }
}