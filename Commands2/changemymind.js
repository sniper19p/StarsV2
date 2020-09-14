const canva = require ("canvacord")
const Discord = require ("discord.js")


exports.run  = async(client, message, args) => {
  message.delete();
let text = args.join(" ")

if(!args[0]) return message.channel.send(`Need more words`);
let image = await canva.changemymind(text);
let changemymind = new Discord.MessageAttachment(image, "cmm.jpg")
message.channel.send(changemymind);
}



exports.conf = {
    commands: ["changemymind", "change"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "clearwarns"
  }
