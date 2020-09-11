const texts = require('../assets/json/kill.json');

exports.run  = async(client, message, args) => {
		let member;
		if (message.mentions.users.first()) {
			member = message.mentions.users.first();
		}
		else if (!isNaN(args[0])) {
			member = message.guild.members.cache.get(args[0]).user;
		}
		else {
			member = message.author;
		}
		const randomAnswer = texts[Math.floor(Math.random() * texts.length)];
		const text = randomAnswer
			.split('{user}').join(`${member.username}`)
			.split('{author}').join(`${message.author.username}`);
		message.channel.send(text);
	
};

exports.conf = {
    commands: ["kill", "Kill"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "kill"
  }