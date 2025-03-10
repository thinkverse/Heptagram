// For generating a random joke fetch from an API
const fetch = require('node-fetch');

const URL = 'https://official-joke-api.appspot.com/random_joke';

function fetchJoke() {
	return fetch(URL).then((res) => res.json());
}

let blocked = false;

module.exports = {
	name: 'joke',
	cooldown: '1m',
	description: 'Displays a joke',
	category: 'Fun',
	minArgs: 0,
	maxArgs: 0,
	expectedArgs: "",

	execute({ message }) {
		// To prevent user spamming the same command
		if (blocked) {
			message.channel.send(
				'Please wait until the joke finishes before using this command again.',
			);
			return;
		}
		fetchJoke()
			.then(response => {
				const { setup, punchline } = response;
				if (!setup || !punchline) {
					message.channel.send('Please wait a few seconds and try again.');
					return;
				}
				blocked = true;
				message.channel.send(setup);
				return new Promise(function(resolve) {
					// wait 3 seconds before sending the punchline
					setTimeout(() => {
						message.channel.send(punchline);
						resolve();
					}, 3000);
				});
			})
			.then(() => {
				blocked = false;
			})
			.catch((err) => console.warn(err));
	},
};
