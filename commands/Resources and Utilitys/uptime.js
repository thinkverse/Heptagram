const { colors, cdn } = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'uptime',
	description: 'gets server uptime',
	category: 'Utilitys',
	minArgs: 0,
	maxArgs: 0,
	expectedArgs: "",

	run: async (message) => {
		try {
			const seconds = Math.round(process.uptime());
			const days = seconds >= 86400 ? Math.floor(seconds / 86400) : 0;
			const hours =
				seconds >= 3600 ? Math.floor((seconds - days * 86400) / 3600) : 0;
			const minutes =
				seconds >= 60
					? Math.floor((seconds - days * 86400 - hours * 3600) / 60)
					: 0;
			const secondsRemain =
				seconds - days * 86400 - hours * 3600 - minutes * 60;

			const uptimeEmbed = new Discord.MessageEmbed()
				.setTitle("Heptagram Uptime:")
				.setColor(colors.heptagram)
				.addFields(
					{ name: 'Days', value: days, inline: true },
					{ name: 'Hours', value: hours, inline: true },
					{ name: 'Minutes', value: minutes, inline: true },
					{ name: 'Seconds', value: secondsRemain, inline: true },

				)
				.setTimestamp()
				.setFooter("Message sent by the Heptagram Bot", `${cdn.sqlogo}`);

			message.channel.send({ embed: uptimeEmbed });
			return { success: true, content: uptimeEmbed };
		}
		catch (err) { }
	},
};