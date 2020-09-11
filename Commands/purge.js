const Discord = require("discord.js");


exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {     ///To allow a simple moderator to use the command just put MANAGE_MESSAGES in place of ADMINISTRATOR 
    let messagecount = parseInt(args[0]);
  
    if(isNaN(messagecount)) return message.channel.send(":x: " + "| Please mention the amount of message that you want to delete");
  
    if(messagecount > 100){
      message.channel.send(":x: " + "| Error, you can only delete between 2 and 100 messages at one time !")
    }else if(messagecount < 2 ) {
      message.channel.send(":x: " + "| Error, you can only delete between 2 and 100 messages at one time !")
    } else {
  
    }{
      message.channel.messages.fetch({limit: messagecount}).then(messages => message.channel.bulkDelete(messages, true));
      message.channel.send(`Purged ${messagecount} messages`)
    }
  } else {
    return message.reply(":x: " + "| You need to be \"ADMINISTRATOR\" to do that")
  }
  }
  

exports.conf = {
    commands: ["clear", "purge"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "purge"
  }