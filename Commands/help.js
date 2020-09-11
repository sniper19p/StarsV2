const Discord = require("discord.js");

exports.run  = async(bot, message, args) => {
  let helpIcon =  bot.user.displayAvatarURL();;
  let helpEmbed = new Discord.MessageEmbed()
    .setDescription("Bot Commands")
    .setColor("#2232c7")
    .setThumbnail(helpIcon)
    .setAuthor('Stars help', `${bot.user.displayAvatarURL()}`, 'https://discord.gg/KWF8tcT')
    .setTitle('Click here to invite me')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=728001463166697534&permissions=8&scope=bot')

  .addField('Description', [
    `Stars is a bot in devlopment it is right now a mod and info bot.`,
    '\u200b'
], true)
.addField('Prefix ', [
  `The preifx for Stars is s! `,
  '\u200b'
], true)
.addField('Commands ', [
  `To get commands say s!cmds`,
  '\u200b'
], true)
.addField('mod Commands ', [
  `To get commands say s!modcmds`,
  '\u200b'
], true)

.addField('Support ', [
  `To join the support sever say s!support`,
  '\u200b'
], true)
.addField('Moreinfo',[
  'For more info dm the devloper Master Kenobi#8345 for more info on the bot',
  '\u200b'
],true)

.setTimestamp()


  message.channel.send(helpEmbed);
}

exports.conf = {
    commands: ["help","Help"],
    enabled: true,
    guildOnly: true
  };
  
  exports.help = { 
    name: 'help', 
    description: 'give commands',
    usage: '[p]me',
    kategori: 'User'
  };