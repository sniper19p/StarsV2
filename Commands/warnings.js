const db = require("quick.db")

exports.run = async (client, message, args, member) => {
    const user = message.mentions.members.first() || message.author
    
  
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

    
    if(warnings === null) warnings = 0;
    
    
    message.channel.send(`${user} has **${warnings}** warning(s)  `)
  
  
  
}

exports.conf = {
    commands: ["warns", "Warnings"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "warnings"
  }