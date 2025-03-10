const { MessageEmbed } = require('discord.js');
const movieQuote = require('popular-movie-quotes');
const { colors, cdn } = require('../../config.json');

module.exports = {
	name: 'moviequote',
	category: 'Fun',
	description: 'Says a quote from a movie provided, or a random movie.',
	minArgs: 0,
	maxArgs: -1,
	expectedArgs: "<movie (optional)>",

	execute({ message, args }) {
		const embed = new MessageEmbed()
			.setColor(colors.heptagram)
			.setTimestamp();

		if (args[0]) {
			const quote = movieQuote.getQuotesByMovie(args.join(' '));
			if (quote[0]) {
				embed.setTitle(`Here's a quote from: ${args.join(' ')}`);
				embed.setDescription(`${quote[0].quote}`);
				embed.setTimestamp();
				embed.setFooter("Message sent by the Heptagram Bot", `${cdn.sqlogo}`);
				return message.reply(embed);
			}
			else {return message.reply('Could not find a quote from that movie.');}
		}
		else {
			const quote = movieQuote.getRandomQuote();
			embed.setTitle('Here\'s a random movie quote');
			embed.setDescription(`${quote}`);
			embed.setTimestamp();
			embed.setFooter("Message sent by the Heptagram Bot", `${cdn.sqlogo}`);

			return message.reply(embed);
		}
	},
};