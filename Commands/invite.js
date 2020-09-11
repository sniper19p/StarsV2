

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
    .addField("Description ", "Stars a discord bot has mod/fun/info commands")
    .setTimestamp()
    .setTitle('Click here to invite me')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=728001463166697534&permissions=8&scope=bot')


    message.author.send(helpEmbed);
}

exports.conf = {
  commands: ["invite"],
  enabled: true,
  guildOnly: true
};

exports.help = { 
  name: 'Me', 
  description: 'Provides invites the bot to your sever.',
  usage: '[p]me',
  kategori: 'User'
};