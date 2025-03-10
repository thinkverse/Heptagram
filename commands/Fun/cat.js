const { MessageEmbed } = require('discord.js');
const { colors, cdn } = require('../../config.json');

const fetch = require('node-fetch');

module.exports = {
	name: 'cat',
	category: 'Fun',
	description: 'Sends a random image of a cat',
	minArgs: 0,
	maxArgs: 0,
	expectedArgs: "",

	async execute({ message }) {

		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

		const catembed = new MessageEmbed()
			.setTitle('Random cat')
			.setImage(file)
			.setColor(colors.heptagram)
			.setTimestamp()
			.setFooter("Message sent by the Heptagram Bot", `${cdn.sqlogo}`);

		message.channel.send(catembed);
	},
};