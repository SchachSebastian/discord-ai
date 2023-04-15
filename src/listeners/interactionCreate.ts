import { Client, CommandInteraction, Interaction } from 'discord.js';
import { commands } from '../commands';

export default (client: Client): void => {
	client.on('interactionCreate', async (interaction: Interaction) => {
		if (interaction.isCommand() || interaction.isChatInputCommand())
			await handleSlashCommand(client, interaction);


	});
};

const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
	const slashCommand = commands.find(c => c.name === interaction.commandName);
	if (!slashCommand) {
		await interaction.followUp({ content: 'An error has occurred' });
		return;
	}
	await interaction.deferReply();
	slashCommand.run(client, interaction);
};