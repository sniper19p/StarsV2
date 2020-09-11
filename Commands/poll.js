const { MessageEmbed } = require("discord.js")


exports.run = async (client, message, args) => {
    if(!message.member.hasPermission(["ADD_REACTIONS", "ADMINISTRATOR"])) return message.channel.send("⛔ *You cannot execute that command due to invaild permissions.*")
    if(!message.guild.me.hasPermission(["ADD_REACTIONS", "ADMINISTRATOR"])) return message.channel.send("⛔ *I cannot execute the command due to invaild permissions.*")
let pollQuestion = args.slice(0).join(" ")
if(!pollQuestion) return message.channel.send("You need a question to ask.")
message.delete()
let newPollEmbed = new MessageEmbed()
    .setColor("GOLD")
    .setAuthor(`${message.author.tag}'s Poll.`, message.author.displayAvatarURL)
    .setDescription(`**POLL:** ${pollQuestion}`)
    .setTimestamp()
    // .setFooterz)
    message.channel.send({embed: newPollEmbed})
    .then(message => {
        message.react('✅')
        message.react('🤷')
        message.react('❌')
      })
      
}
exports.conf = {
    commands: ["poll", "Poll"],
    enabled: true,
    guildOnly: true
  };
  exports.help = {
    name : "poll"
  }