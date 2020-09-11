
const ms = require('ms');
const {
    MessageEmbed
} = require('discord.js')
exports.run = async (client, message, args) => {
        let time = args[0];
        let reason = args.slice(1).join(" ")
        if (!reason) reason = "Right Back"
        time = ms(time)
        let returntime = ms(time, {
            long: true
        })
        if (time < ms('5s')) return message.channel.send(`Please input a time longer/equal than/to 5 seconds`)
        message.channel.send(`Alright, i will remind you in ${returntime}`)
        setTimeout(function () {
            message.reply(`Your time is up for ${reason}!`)
        }, time)
    
};
exports.conf = {
    commands: ["Remindme", "remindme"],
    enabled: true,
    guildOnly: false
  };
  exports.help = {
    name : "remindme"
  }