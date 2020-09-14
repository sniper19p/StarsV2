const canva = require ("canvacord")
const Discord = require ("discord.js")


exports.run  = async(client, message, args) => {
  message.delete();
    let avatar = message.author.displayAvatarURL({dynamic: false, format: "png" });
    let image = await canva.trash(avatar);
    let triggered = new Discord.MessageAttachment(image, "tash.jpg")
    message.channel.send(triggered)
}









exports.conf = {
    commands: ["trash", "Trash"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "clearwarns"
  }

