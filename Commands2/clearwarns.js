


const Discord = require('discord.js');

const db = require("quick.db");




    exports.run  = async(bot, message, args, member) => {





if(!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send("You need admin perms to use this command")
  }
  
  const user = message.mentions.members.first()
  
  if(!user) {
  return message.channel.send("Please mention the person whose warning you want to reset")
  }
  
  if(message.mentions.users.first().bot) {
    return message.channel.send("Bot are not allowed to have warnings")
  }

 
  let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)


  if(warnings === null) {
    return message.channel.send(`${message.mentions.users.first().username} do not have any warnings`)
  }

  db.delete(`warnings_${message.guild.id}_${user.id}`)

    user.send(`All your warnings where reseted by ${message.author.username} from ${message.guild.name}`)
    await message.channel.send(`Reseted all warnings of ${message.mentions.users.first().username}`) 
    


    let modlog = db.get(`moderation.${message.guild.id}.modlog`);
    if (!modlog) return;
    // Return if it's not enabled.
    
    if (message.channel.id === modlog.channel) return;
    // This will prevent any chaos when deleting some message inside the modlog.
    
    let toggle = modlog.toggle;
    if (!toggle || toggle == null || toggle == false) return;
    
    
    let Embed = new Discord.MessageEmbed()
    .setTitle("Warn")
    .setColor("#00ff00")
    .setDescription(`Reseted all warnings from ${message.mentions.users.first().username}`)
    .addField("Reseted by", message.author.tag)
    .setTimestamp()
    
    
    return message.guild.channels.cache.get(modlog.channel).send(Embed);
    










};































exports.conf = {
    commands: ["clearwarns", "Clearwarns"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "clearwarns"
  }

