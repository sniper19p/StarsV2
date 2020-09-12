
const Discord = require('discord.js');

const ownerid = 507730859571281932;

exports.run = async (bot, message, msg) => {
    if (message.author.id == ownerid) {
        if (!message.guild.me.hasPermission("ADMINISTRATOR"))
          return message.channel
            .send("I Dont Have Permissions")
            .then(msg => msg.delete({ timeout: 5000 }));
  
  bot.user.setActivity(`Restarting In 10 Seconds!`, { type: "PLAYING" });

  message.channel
    .send(`🛑 | Bot Is Going To Restart In 10 Seconds!`)
    .then(msg => {
      setTimeout(function() {
        bot.destroy();
    bot.login(process.env.token);
      }, 10000);

      setTimeout(function() {
        msg.edit(`✅ | Bot Has Been Restarted Successfully!`);
      }, 10000);
    });
    }
}

    exports.conf = {
        commands: ["restart", "restart"],
        enabled: true,
        guildOnly: false
      };
      exports.help = {
        name : "restart"
      }