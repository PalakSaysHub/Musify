import discord 
from discord.ext import commands 
bot = commands.Bot(command_prefix='!')
@bot.event
async def on_ready():
    print(f'Logged in as {bot.user}!')
@bot.command()
async def join(ctx):
    """Command for the bot to join a voice channel."""
    if ctx.author.voice:
        channel = ctx.author.voice.channel
        await channel.connect()
        await ctx.send(f"Joined {channel}!")
    else:
        await ctx.send("You are not in a voice channel.")
     @bot.command()
async def leave(ctx):
    """Command for the bot to leave a voice channel."""
    if ctx.voice_client:
        await ctx.voice_client.disconnect()
        await ctx.send("Disconnected from the voice channel.")
    else:
        await ctx.send("I am not in a voice channel.")
      @bot.command()
async def play(ctx, url):
    """Command to play music from a URL."""
    if not ctx.voice_client:
        await ctx.send("I'm not connected to a voice channel.")
        return

    voice_client = ctx.voice_client
    voice_client.stop()
    voice_client.play(discord.FFmpegPCMAudio(url))
    await ctx.send(f"Now playing: {url}")

@bot.command()
async def stop(ctx):
    """Command to stop the music."""
    if ctx.voice_client and ctx.voice_client.is_playing():
        ctx.voice_client.stop()
        await ctx.send("Stopped the music.")
    else:
        await ctx.send("No music is currently playing.")
bot.run("MTMxNjQwOTg4NDEyODA1NTM1Nw.GpbNz8.RJyREd5P-EmQpVQtdel-uepgR7qfWoiFBLtIMA")
