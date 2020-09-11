const {MessageEmbed} = require('discord.js')
module.exports.run = async (bot, message, args) => {
 
     
  
    const msg = bot.snipes.get(message.channel.id);
    if(!msg) return message.channel.send("There isn't anything to snipe")
      
   const embed = new MessageEmbed()
   .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
   .setDescription(msg.content)
   .setColor('RED')
   .setImage(msg.image)
   message.channel.send(embed)
     
   
    
}



exports.conf = {
    commands: ["snipe"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "snipe"
  }