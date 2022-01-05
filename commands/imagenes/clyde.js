const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
        name: 'clyde',
        description: "Envia un mensaje con clayde XD",
    go: async (client, message, args) => {
    
        const text = args.slice().join(' ');
		if (!text) {
			return message.channel.send({ embeds: [
                new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription("Pon un texto")
            ]});
		}

		const url = `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`;

		let response;
		try {
			response = await fetch(url).then(res => res.json());
		}
		catch (e) {
			return message.channel.send('❎ An error occured, please try again!');
		}
		const attachment = new MessageAttachment(response.message, 'clyde.png');
		return message.channel.send({files: [attachment]});
  
    }
}