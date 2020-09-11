const Discord = require("discord.js");

exports.run  = async(bot, message, args) => {
  let helpIcon =  bot.user.displayAvatarURL();;
  let helpEmbed = new Discord.MessageEmbed()
    .setDescription("Bot Commands")
    .setColor("#2232c7")
    .setThumbnail(helpIcon)
    
  .addField('```warn```', [
    `warns user`,
    '\u200b'
], true)
.addField('```warnings```', [
  `shows warnings of user or you`,
  '\u200b'
], true)
.addField('```purge```', [
  `purge messages`,
  '\u200b'
], true)
.addField('```clearwarns```', [
  `clears warnings of user`,
  '\u200b'
], true)
.addField('```kick```', [
  `kicks user from guild`,
  '\u200b'
], true)
.addField('```ban```', [
  `ban user from guild`,
  '\u200b'
], true)

.addField('```slowmode```', [
  `makes channel have slowmode usage s!slowmode 5s/5m/5h/`,
  '\u200b'
], true)
.addField('```modlog```', [
  `sets log channel for warnings and (ban/kick soon)`,
  '\u200b'
], true)
.addField('```lockdown```', [
  `locks down channel  that command in said in`,
  '\u200b'
], true)
.addField('```unlockdown```', [
  `unlocks channel that command in said in`,
  '\u200b'
], true)
.setTimestamp()


  message.channel.send(helpEmbed);
}

exports.conf = {
    commands: ["modcmds","Modcmds"],
    enabled: true,
    guildOnly: true
  };
  
  exports.help = { 
    name: 'help', 
    description: 'give commands',
    usage: '[p]me',
    kategori: 'User'
  };