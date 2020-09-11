const Discord = require('discord.js');
const db = require("quick.db");


exports.run = async (client, message, args, member) => {

  

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have premission to do that!");
  

  const user = message.mentions.members.first()

    if(!user) {
      return message.channel.send("Please Mention the person to who you want to warn - warn <@mention> <reaosn>")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("You can not warn bots")
    }

    if (user.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner.id) {
      return message.channel.send('**You cannot warn a member that has the same role as you or has a higher role than you!**')
    }
    
 
  
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      return message.channel.send("Please provide reason to warn - warn <@mention> <reason>")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 3) {
      return message.channel.send(`${message.mentions.users.first().username} already reached his/her limit with 3 warnings`)
    }
    
    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)

      let dmsEmbed = new Discord.MessageEmbed()

      .setTitle("Warn")
      .setColor("#00ff00")
      .setDescription(`You have been warned on \`${message.guild.name}\``)
      .addField("Warned by", message.author.tag)
      .setTimestamp()
      .addField("Reason", reason);

    

      user.send(dmsEmbed);


      let dmssEmbed = new Discord.MessageEmbed()

      .setTitle("Warn")
      .setColor("#00ff00")
      .setDescription(`${message.mentions.users.first().username} has been warned for ${reason} `)
      .setTimestamp()
      .addField("Warned by", message.author.tag);

      
      await message.channel.send(dmssEmbed);
    }
  

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
  .setDescription(`${message.mentions.users.first().username} has been warned for ${reason} `)
  .setTimestamp()
  .addField("Warned by", message.author.tag)


  return message.guild.channels.cache.get(modlog.channel).send(Embed);


}










exports.conf = {
    commands: ["warn", "Warn"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "warn"
  }