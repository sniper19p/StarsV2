const Discord = require("discord.js");
const pagination = require("discord.js-pagination");


module.exports.run = async (client, message, args, tools) => {

    const page1 = new Discord.MessageEmbed()
      .setTitle(`Page 1`)
      .setDescription(`I am Page 1\n Click ⏩`)
      .setColor("RANDOM");

    const page2 = new Discord.MessageEmbed()
      .setTitle(`Page 2`)
      .setDescription(`I am Page 2\n Click ⏩`);

    const page3 = new Discord.MessageEmbed()
      .setTitle(`Page 3`)
      .setDescription(`I am Page 3`);

    const pages = [page1, page2, page3];

    const emojilist = ["⏪", "⏩"];



    pagination(message, pages, emojilist);
  },


exports.conf = {
    commands: ["testing"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "test"
  }