

const {
    MessageEmbed
} = require('discord.js')
exports.run = async (client, message, args) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
        if (!member) return message.channel.send('No member specified')
        let reason = args.join(" ")
        if (!reason) reason = "No reason provided."
        let embed = new MessageEmbed()
            .setColor("RED")
            .setDescription(`${message.author.tag} added ${member.user.tag} a role: ${role}`)
            .setTimestamp()
        message.channel.send(embed)
        member.roles.add(role)
    
};
exports.conf = {
    commands: ["addrole"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "addrole"
  }