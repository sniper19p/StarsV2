exports.run = function (bot, msg, args) {
    if (args.length < 1) {
        msg.reply("You must input text to be reversed!")
        throw 'reverse error'
    }
    msg.reply(args.join(' ').split('').reverse().join(''));


}


exports.conf = {
    commands: ["reverse", "Reverse"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "reverse"
  }