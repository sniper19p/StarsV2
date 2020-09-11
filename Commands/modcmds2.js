const Discord = require("discord.js");
const pagination = require("discord.js-pagination");


module.exports.run = async (client, message, args, tools) => {

    const page1 = new Discord.MessageEmbed()
      .setTitle(`warn commands`)
      .setColor("RANDOM")
      .addField('```warn```', [
        `warns user`,
        '\u200b'
    ], true)
    .addField('```warnings```', [
      `shows warnings of user or you`,
      '\u200b'
    ], true)
    .addField('```clearwarns```', [
        `clears warnings of user`,
        '\u200b'
      ], true)
      .setDescription(`  Click ⏪ or ⏩`);

    const page2 = new Discord.MessageEmbed()
      .setTitle(`Channel commands`)
      .setDescription(`  Click ⏪ or ⏩`)
      .addField('```lockdown```', [
        `locks down channel  that command in said in`,
        '\u200b'
      ], true)
      .addField('```unlockdown```', [
        `unlocks channel that command in said in`,
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
      .addField('```purge```', [
        `purge messages`,
        '\u200b'
      ], true)

      .setColor("RANDOM");
    const page3 = new Discord.MessageEmbed()
      .setTitle(`Kick/Ban`)
      .setColor("RANDOM")

      .addField('```kick```', [
        `kicks user from guild`,
        '\u200b'
      ], true)
      .addField('```ban```', [
        `ban user from guild`,
        '\u200b'
      ], true)
      
      .setDescription(`  Click ⏪ or ⏩`);
    const pages = [page1, page2, page3];

    const emojilist = ["⏪", "⏩"];



    pagination(message, pages, emojilist);
  },


exports.conf = {
    commands: ["modcmds", "modcommands"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "cmds"
  }