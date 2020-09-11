module.exports.run = async(bot, message, args) => {
		const shards = client.shards;
		switch (args[0]) {
			case '0':
				message.channel.send(`🏓 Pong! - \`${shards.get(0).latency}ms\` for Shard 0`);
				
				break;
			case '1':
				message.channel.send(`🏓 Pong! - \`${shards.get(1).latency}ms\` for Shard 1`);
				break;
			default:
				const msg = await message.channel.send('🏓 Pong!');
				msg.edit(`🏓 Pong! \`${Math.abs(message.createdAt - msg.createdAt)}ms\``);
		}
	
};
exports.conf = {
    commands: ["ping", "Ping"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "ping"
  }