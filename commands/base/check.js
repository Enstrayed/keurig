const { SlashCommandBuilder } = require('discord.js');
const { db } = require('../../index.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('check')
		.setDescription('Check if bot is up, database is OK, and echos input')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Input to echo back to operator')),
	async execute(interaction) {
        const input = interaction.options.getString('input') ?? 'NOT_SUBMITTED'
		db.get("miau").then(res=> {
			interaction.reply(`OK; Operator: <@${interaction.user.id}>; Database: ${res}; Echo: ${input}`)
		})
	},
};