exports.run = (client, message, msg) => {
    if (!client.lockit) client.lockit = [];
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("❌**Error:** You don't have the permission to do that!❌");
  
    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: true
      
      }).then(() => {
        message.channel.send('✅Lockdown lifted  Have fun enjoy!✅');
        delete client.lockit[message.channel.id];
      }).catch(error => {
        console.log(error);
      })
    };


    exports.conf = {
        commands: ["unlockdown", "Unlockdown"],
        enabled: true,
        guildOnly: true
      };
      exports.help = {
        name : "lockdown"
      }