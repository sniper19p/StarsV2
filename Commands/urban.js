const Discord = require("discord.js");
const urban = require("urban");

module.exports.run = async (bot, message, args) => {
    if(args.length < 1) return message.reply("Please enter something!");
    let XD = args.join(" "); 

    urban(XD).first(json => {
        if(!json) return message.reply("No results found!")

        let urbEmbed = new Discord.MessageEmbed()
        .setColor("00ff00")
        .setTitle(json.word)
        .setDescription(json.definition)
        .addField("Upvotes", json.thumbs_up, true)
        .addField("Downvotes", json.thumbs_down, true)
        .setFooter(`Written by: ${json.author}`)
        .setTimestamp();

        message.channel.send(urbEmbed)
    });
}

    exports.conf = {
        commands: ["urban", "Urban"],
        enabled: true,
        guildOnly: true
      };
      exports.help = {
        name : "urban"
      }