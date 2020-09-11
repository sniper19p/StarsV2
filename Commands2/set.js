/* eslint-disable no-case-declarations */
const {
    setSuggestChannel,
    setAnnounceChannel,
    setWelcomeChannel,
    setLeaveChannel
  } = require("../utils/functions");
  
  exports.run  = async(client, message, args) => {
      if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply(
          "Sorry, You don't have the correct permissions for this command. (Administrator)"
        );
  
      let channel = message.mentions.channels.first();
      const option = args[0];
  
      if (!option) return message.channel.send("Please provide an valid option");
      if (!channel)
        return message.channel.send("Please provide a valid channel!");
  
      switch (option.toLowerCase()) {
        case "suggest-channel":
          setSuggestChannel(message.guild.id, channel);
          message.channel.send(`Suggest channel is now: ${channel}`);
          break;
        case "announce-channel":
          setAnnounceChannel(message.guild.id, channel);
          message.channel.send(`Announcement channel is now: ${channel}`);
          break;
        case "welcome-channel":
          setWelcomeChannel(message.guild.id, channel);
          message.channel.send(`Enabled welcome messages. Welcome channel is now: ${channel}`);
          break;
        case "leave-channel":
          setLeaveChannel(message.guild.id, channel);
          message.channel.send(`Enabled user leave messages. User Leave channel is now: ${channel}`);
          break;
        default:
          message.channel.send(`**${option}** is not a option!`);
          break;
      }

  };

  exports.conf = {
    commands: ["set", "Set"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "set"
  }