const canva = require ("canvacord")
const Discord = require ("discord.js")


exports.run  = async(client, message, args) => {
  message.delete();
    let avatar = message.author.displayAvatarURL({dynamic: false, format: "png" });
    let image = await canva.trigger(avatar);
    let triggered = new Discord.MessageAttachment(image, "triggered.gif")
    message.channel.send(triggered)
}









exports.conf = {
    commands: ["trigger", "triggered"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "trigger"
  }

