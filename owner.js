const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'owner',
    description: 'Bot owner info',
    execute(message, args) {
        const discordLink = 'https://discord.gg/MBa2qmEj';
        
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' 🫅 Owner Info')
            .setDescription(`__**About me**__:\n 🤖 Myself Palak . I am a discord bot developer and web developer. I love playing games, watching anime and building different webserver applications. You will get faster replies on instagram than other social media. Feel free to contact me!\n ❤️ [Palak}(${discordLink})\n 💙 [Atstreak]`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};
