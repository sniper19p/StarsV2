exports.run = (client, message, msg) => {
    if (!client.lockit) client.lockit = [];
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** You don't have the permission to do that!❌");
  
    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      })
        message.channel.send(`❌**${message.author.username}** just locked the channel down. Admins will soon open the chat again so be patient.❌`);
    };


    exports.conf = {
        commands: ["lockdown", "lockdown"],
        enabled: true,
        guildOnly: true
      };
      exports.help = {
        name : "lockdown"
      }