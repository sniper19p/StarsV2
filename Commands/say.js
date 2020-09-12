const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");
  message.delete();
  let botmessage = args.join(" ");
  message.channel.send(botmessage);
}



exports.conf = {
    commands: ["say", "Say"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "say"
  }