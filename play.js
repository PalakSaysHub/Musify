const {
    }

    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });

    currentConnection = connection; 
    currentMessage = message; 

    if (connection.state.status === VoiceConnectionStatus.Ready) {
      enqueue({ searchQuery, message });
      createPlayer();
      return message.reply('**✅ Song added to Queue!**');
    }

    const listener = async (oldState, newState) => {
      if (newState.member.user.bot) {
        return;
      }

      if (oldState.channel && !newState.channel) {
        const membersInChannel = oldState.channel.members.size;
        if (membersInChannel === 1) {
          message.client.removeListener('voiceStateUpdate', listener);

          if (!connection.destroyed) {
            connection.destroy();
          }
        }
      }
    };

    message.client.on('voiceStateUpdate', listener);

    await playSong(connection, searchQuery, message);
  },
  queue,
  dequeue,
  playNextSong,
  playSong,
  pause: () => {
    pausePlayback();
  },
  resume: () => {
    resumePlayback();
  },
  getPlayer: () => player,
  getCurrentConnection: () => currentConnection, 
};
