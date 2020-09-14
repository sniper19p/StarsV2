const ytsr = require("ytsr");
const {MessageEmbed} = require("discord.js");



exports.run  = async(client, message, args) => {
const query = args.join(" ");
if (!query) return message.channel.send("Please proive a search name");
const res = await ytsr(query).catch(e => {
    return message.channel.send("No results sorry");

});
const video = res.items.filter(i => i.type ==="video")[0];
if (!video) return message.channel.send("No results sorry.")

const embed = new MessageEmbed()
.setTitle(video.title)
.setImage(video.thumnail)
.setColor("RED")
.setDescription(`**[${video.link}](${video.link})**`)
.addField("Views", video.views.toLocaleString(), true)
.addField("Duration", video.duration, true)

return message.channel.send(embed)
};





exports.conf = {
    commands: ["youtube", "Youtube"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "lockdown"
  }