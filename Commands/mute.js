
    const db = require("quick.db");
    const Discord = require('discord.js');
    
    
    const { MessageEmbed } = require("discord.js");

    module.exports.run = async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES")) {
          return message.channel.send(
            "Sorry but you do not have permission to mute anyone"
          );
        }
    
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
          return message.channel.send("I do not have permission to manage roles.");
        }
    
        const user = message.mentions.members.first();
        
        if(!user) {
          return message.channel.send("Please mention the member to who you want to mute")
        }
        
        if(user.id === message.author.id) {
          return message.channel.send("I won't mute you -_-");
        }
        
        
        let reason = args.slice(1).join(" ")
        
        
        if(!reason) {
          return message.channel.send("Please Give the reason to mute the member")
        }
        
      
        
        let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
        
        
          if(!muterole) {
          return message.channel.send("This server do not have role with name `Muted`")
        }
        
        
       if(user.roles.cache.has(muterole)) {
          return message.channel.send("Given User is already muted")
        }
        
      
        
        
        user.roles.add(muterole)
        
    await message.channel.send(`You muted **${message.mentions.users.first().username}** For \`${reason}\``)
        
        user.send(`You are muted in **${message.guild.name}** For \`${reason}\``)
        
        
        let modlog = db.get(`moderation.${message.guild.id}.modlog`);
        if (!modlog) return;
        // Return if it's not enabled.
    
        if (message.channel.id === modlog.channel) return;
        // This will prevent any chaos when deleting some message inside the modlog.
    
        let toggle = modlog.toggle;
        if (!toggle || toggle == null || toggle == false) return;
    
    
      let Embed = new Discord.MessageEmbed()
      .setTitle("Mute")
      .setColor("#00ff00")
      .setDescription(`${message.mentions.users.first().username} has been muted for ${reason} `)
      .addField("Warned by", message.author.tag)
      .setTimestamp()
    
    
      return message.guild.channels.cache.get(modlog.channel).send(Embed);
        
      
    };















exports.conf = {
    commands: ["mute", "Mute"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "mute"
  }