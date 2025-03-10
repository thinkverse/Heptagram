const Discord = require('discord.js');
const { colors, cdn } = require('../../config.json');

module.exports = {
	name: 'discord',
	description: 'sends a link for the bot support server',
	category: 'Info',
	minArgs: 0,
	maxArgs: 0,
	expectedArgs: "",

	execute: ({ message }) => {
		const embed = new Discord.MessageEmbed()
			.setTitle('Come join the Heptagram bot discord server!')
			.setColor(colors.heptagram)
			.setDescription('Join the Heptagram bot discord server at https://discord.gg/HSupF99kpq')
			.setTimestamp()
			.setFooter("Message sent by the Heptagram Bot", `${cdn.sqlogo}`);
		message.channel.send(embed);
	},
};