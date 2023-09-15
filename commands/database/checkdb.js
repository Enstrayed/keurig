const { SlashCommandBuilder } = require('discord.js');
const { db } = require('../../index.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('checkdb')
		.setDescription('Checks connection to Redis'),
	async execute(interaction) {

        db.get('miau').then(res => {
            console.log(res)
            if (res == "miau") {
                interaction.reply('Database OK!')
            } else {
                interaction.reply('Somethings fucked!')
            }
        })

	},
};