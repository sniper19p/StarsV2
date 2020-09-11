

const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
// exports.onLoad = (client) => {};
/**
 * 
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */
module.exports.run = async(bot, message, args) => {
  let helpIcon =  bot.user.displayAvatarURL();;
  let helpEmbed = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setThumbnail(helpIcon)
    .addField("Support ", "Join with the link above to join the support sever")
    .setTitle('Click here to join my support server')
    .setURL('https://discord.gg/KWF8tcT')
    .setTimestamp()


    message.author.send(helpEmbed);
}

exports.conf = {
  commands: ["Support","support", "Supportsever"],
  enabled: true,
  guildOnly: false
};

exports.help = { 
  name: 'Me', 
  description: 'Provides invites the bot to your sever.',
  usage: '[p]me',
  kategori: 'User'
};