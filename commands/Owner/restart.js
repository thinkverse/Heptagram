const { colors } = require('../../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'restart',
	aliases: ['r', 're'],
	description: 'restarts bot.',
	category: 'Owner',
	ownerOnly: true,
	hidden: true,

	execute: async ({ client, message }) => {

		const embed = new MessageEmbed()
			.setColor(colors.heptagram)
			.setTitle(`<:status_offline:852483939955769375> **Bot Restarting!** <:status_offline:852483939955769375>`)
			.setDescription(`The bot has been qued to restart.`)
			.setTimestamp()
			.setFooter("Message sent by the Heptagram Bot", 'https://cdn.heptagram.xyz/Logos/HeptagramLogo%28square%29.png');

		await message.channel.send(embed).then(() => {
			client.destroy();
			process.exit();
		});
	},
};