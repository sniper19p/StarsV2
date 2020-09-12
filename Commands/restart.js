
const Discord = require('discord.js');

const ownerid = 507730859571281932;

exports.run = async (bot, message, Client) => {
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
    bot.login("NzI4MDAxNDYzMTY2Njk3NTM0.Xv0CMg.DTG1uMeUnAAd-9h-w2aVL6T3lzE");
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