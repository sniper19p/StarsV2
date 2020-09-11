const { MessageEmbed } = require("discord.js");
const { getAnnounceChannel } = require("../utils/functions");


exports.run  = async(bot, message, args) => {
    if (!args[0]) {
      return message.channel.send(
        "Please provide text or a valid channel!\n You can also set a default channel using `set announce-channel <channel mention>`"
      );
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "You don't have the correct permissions for that!"
      );

    const defaultChannel = await getAnnounceChannel(message.guild.id);
    let channel = message.mentions.channels.first();
    let text;

    if (channel) {
      text = args.splice(1).join(" ");
    } else if (defaultChannel !== null) {
      channel = defaultChannel;
      text = args.join(" ");
    } else {
      return message.channel.send("Please provide text or a valid channel");
    }

    const embed = new MessageEmbed()
      .setTitle("📢 Announcement 📢")
      .setDescription(text)
      .setFooter(message.author.username)
      .setColor("YELLOW")
      .setTimestamp();

    bot.channels.cache.get(channel.id).send(embed);
  
};
exports.conf = {
  commands: ["Announce", "announce"],
  enabled: true,
  guildOnly: true
};
exports.help = {
  name : "announce"
}