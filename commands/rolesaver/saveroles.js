const { SlashCommandBuilder } = require('discord.js');
const { db } = require('../../index.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('saveroles')
		.setDescription('Save roles of target in current domain')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('Target to save roles')
                .setRequired(true)),
	async execute(interaction) {
        const target = interaction.options.getMember('target');
        console.log(target.roles.cache)
		await interaction.reply('ok')
	},
};