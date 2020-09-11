const Discord = require('discord.js');
const ownerid = "507730859571281932";
exports.run = (client, message, args) => {

    if (message.author.id == ownerid) {
        if (!message.guild.me.hasPermission("ADMINISTRATOR"))
          return message.channel
            .send("I Dont Have Permissions")
            .then(msg => msg.delete({ timeout: 5000 }))
    }

  message.delete();
    let msg = args.slice(1).join(' ');
    let user = message.mentions.users.first() || message.guild.members.get(args[0])
    if(!user) return message.reply('You must mention someone or provide a valid UserID for me to dm them.');
    if (msg.length < 1) msg = 'Blank message. . .';

    const embed = new Discord.MessageEmbed()
    .setColor(Math.floor(Math.random()*16777215))

    .setTitle(`You have a new message from ${message.author.username}!`)
    .addField('Remember:', `Do not reply to me because ${message.author.username} will not recieve the reply, take your stuff to their dms instead.`)
    .addField(`${message.author.username}'s message:`, msg)
    .setTimestamp()
    user.send({embed}).catch(e =>{
      if (e) {
         message.channel.send("That user unfortunately locked their DMs")
      }else{
         message.channel.send("Successfully sent your message")
      }
    });
}
exports.conf = {
  commands: ["dm"],
  enabled: true,
  guildOnly: false
};
exports.help = {
  name : "dm user"
}