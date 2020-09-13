const Discord = require("discord.js");
const pagination = require("discord.js-pagination");


module.exports.run = async (client, message, args, tools) => {

    const page1 = new Discord.MessageEmbed()
      .setTitle(`Fun commands`)
    

      .addField('```meme```', [
        `sends a meme in chat.`,
        '\u200b'
    ], true)
    .addField('```joke```', [
      `Sends a joke into chat.`,
      '\u200b'
  ], true)
  .addField('```dice```', [
    `role a dice to see what number you get`,
    '\u200b'
  ], true)
  .addField('```8ball```',[
    '8ball user asks a question with more than 2 word to get random reply',
    '\u200b'
], true)
.addField('```snipe```',[
  'Shows last deleted message',
  '\u200b'
], true)
      .setColor("RANDOM")
      .setDescription(`  Click ⏪ or ⏩`);

    const page2 = new Discord.MessageEmbed()
      .setTitle(`Info commands`)
      .setDescription(`  Click ⏪ or ⏩`)
      .addField('```userinfo```', [
        `show userinfo for you or whoever you @`,
        '\u200b'
      ], true)
      .addField('```serverinfo```', [
        `show serverinfo for the sever your in`,
        '\u200b'
      ], true)
      .addField('```roleinfo```', [
        `shows info on roles`,
        '\u200b'
      ], true)
      .addField('```channelinfo```', [
        `shows channel info `,
        '\u200b'
      ], true)
      .addField('```Covid```',[
        'Shows covid stats (Covid all || USA ) or another country.',
        '\u200b'
      ], true)
      .addField('```stats```',[
        'shows stats of bot',
        '\u200b'
      ], true)
      .setColor("RANDOM");
    const page3 = new Discord.MessageEmbed()
      .setTitle(`Other commands`)
      .setColor("RANDOM")
      .addField('```urban```', [
        `Look something up with the urban command!`,
        '\u200b'
      ], true)
      .addField('```morse```', [
        `changes words you send into morse code`,
        '\u200b'
      ], true)
      .addField('```remindme```', [
        `sets a timer to remind you of something if the bot is reset the timer will not go off.`,
        '\u200b'
      ], true)
      
      .addField('```invite```', [
        `you can invite the bot to your sever soon to come not yet though`,
        '\u200b'
      ], true)
      .addField('```help```', [
        `shows you all the commands what your seeing now!`,
        '\u200b'
      ], true)
      .addField('```ping```', [
        `show ping for the bot`,
        '\u200b'
      ], true)
      .addField('```poll```', [
        `make a poll`,
        '\u200b'
      ], true)
      
      .addField('```invites```', [
        `shows how many people you have invited to your server`,
        '\u200b'
      ], true)
      
      
      .addField('```addrole```', [
        `add role to user`,
        '\u200b'
      ], true)
      
      .addField('```modcmds```', [
        `shows mod commands`,
        '\u200b'
      ], true)

      .setDescription(`  Click ⏪ or ⏩`);

      const page4 = new Discord.MessageEmbed()
      .setTitle(`Avatar commands`)
      .setColor("RANDOM")
      .addField('```trigger```', [
        `Makes your image triggered s!trigger / s!triggered`,
        '\u200b'
      ], true)
      .addField('```change my mind```', [
        `makes a change my mind command image s!changemymind (message)`,
        '\u200b'
      ], true)
      .addField('```trash```', [
        `does trash meme s!trash`,
        '\u200b'
      ], true)
      .addField('```facepalm```', [
        `does a faceplam with your avatar s!facepalm`,
        '\u200b'
      ], true)
      .addField('```avatar```', [
        `shows users avatar s!avatar`,
        '\u200b'
      ], true)


      .setDescription(`  Click ⏪ or ⏩`);


    const pages = [page1, page2, page3, page4];

    const emojilist = ["⏪", "⏩"];



    pagination(message, pages, emojilist);
  },


exports.conf = {
    commands: ["cmds", "commands"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "cmds"
  }