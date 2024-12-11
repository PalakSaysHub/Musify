const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const TOKEN = 'MTMxNjQwOTg4NDEyODA1NTM1Nw.GpbNz8.RJyREd5P-EmQpVQtdel-uepgR7qfWoiFBLtIMA';

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
});

client.login(MTMxNjQwOTg4NDEyODA1NTM1Nw.GpbNz8.RJyREd5P-EmQpVQtdel-uepgR7qfWoiFBLtIMA);
