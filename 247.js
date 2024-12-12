const {
        const reconnectInterval = setInterval(() => checkAndReconnect(connection, message, channelId), 10000); 
        reconnectIntervals.set(guildId, reconnectInterval);

        const embed = new EmbedBuilder()
           .setColor('#2b71ec')
     .setAuthor({
          name: '24/7 Activated!',
          iconURL: 'https://cdn.discordapp.com/attachments/1175488636033175602/1175524855140057209/check.png?ex=656b8bd5&is=655916d5&hm=75eb1b1f6731b0d6bdec686677d5a86f359f4a5acbbd58751d35ec26d852aaa6&',
          url: 'https://discord.gg/FUEHs7RCqz'
        })
          .setDescription('**You need to deactivate 24/7 to play songs!**');

        message.reply({ embeds: [embed] });
      });

      connections.set(guildId, connection);
    }
  },
};

async function checkAndReconnect(connection, message, targetChannelId) {
  if (connection) {
    const guildId = connection.joinConfig.guildId;
    const targetVoiceChannel = message.guild.channels.cache.get(targetChannelId);

    if (targetVoiceChannel) {
      await new Promise(resolve => setTimeout(resolve, 6000));

      try {
        const newConnection = joinVoiceChannel({
          channelId: targetChannelId,
          guildId,
          adapterCreator: message.guild.voiceAdapterCreator,
        });

        newConnection.on(VoiceConnectionStatus.Ready, () => {
          console.log('Reconnected to voice channel.');
          connections.set(guildId, newConnection);
        });
        connections.set(guildId, newConnection);
      } catch (error) {
        console.error('Error reconnecting to voice channel:', error.message);
      }
    } else {
      console.log('Specified voice channel not found. Skipped reconnection.');
    }
  }
}
