import { Client } from 'discord.js';
import { commands } from '../commands.js';

export default (client: Client): void => {
	client.on('ready', async () => {
		if (!client.user || !client.application) return;
		await client.application.commands.set(commands);
		console.log(`${client.user.tag} is online`);
	});
};